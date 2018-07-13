Template.chat.helpers({
  chatlines: function(){
    // return the last five chats
    // sorted by when they were created (most recent, first)
    return Chats.find({},
                      {limit:5,
                        sort: {createdAt: -1}})},

})


Template.chat.events({
  "click .js-chatsubmit": function(event){
    event.preventDefault();
    console.log("the button was clicked")
    const theText = $(".js-chatinput").val();  // read the user's chat text ...
    const chatline = {text:theText, createdAt:new Date(), createdBy:Meteor.userId()};
    Chats.insert(chatline);
  },
//End here
})


const socket = io();
// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();

client.configure(feathers.socketio(socket));
client.configure(feathers.hooks());
// Use localStorage to store our login token
client.configure(feathers.authentication({
  storage: window.localStorage
}));

// Shows the chat page
function showChat() {
  document.getElementById('app').innerHTML = chatHTML;
  // Find the latest 10 messages. They will come with the newest first
// which is why we have to reverse before adding them
client.service('messages').find({
  query: {
    $sort: { createdAt: -1 },
    $limit: 25
  }
}).then(page => page.data.reverse().forEach(addMessage));

// Find all users
client.service('users').find().then(page => {
  const users = page.data;

  // Add every user to the list
  users.forEach(addUser);
});

// Log in either using the given email/password or the token from storage
function login(credentials) {
  const payload = credentials ?
    Object.assign({ strategy: 'local' }, credentials) : {};

  return client.authenticate(payload)
    .then(showChat)
    .catch(showLogin);
}
});
document.addEventListener('submit', function(ev) {
  if(ev.target.id === 'send-message') {
    // This is the message text input field
    const input = document.querySelector('[name="text"]');

    // Create a new message and then clear the input field
    client.service('messages').create({
      text: input.value
    }).then(() => {
      input.value = '';
    });
    ev.preventDefault();
  }
});
// Listen to created events and add the new message in real-time
client.service('messages').on('created', addMessage);

// We will also see when new users get created in real-time
client.service('users').on('created', addUser);

login();
}
