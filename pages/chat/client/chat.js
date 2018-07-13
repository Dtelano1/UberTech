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

function Chat () {
/* call update chat function */
this.update = updateChat;
/* call send chat function */
this.send = sendChat;
/* call get state function */
this.getState = getState;
}

function getState() {
  if(!instanse){
    instanse = true;
    /* define AJAX function */
    $.ajax({
      type: "POST",
      url: "ajax.php",
      data: {'function': 'getState', 'file': file},
      dataType: "json",
      success: function(data) {state = data.state;instanse = false;}
    });
  }
}
//define update chat function
function updateChat() {
  if(!instanse){
    instanse = true;
    /* define AJAX function */
    $.ajax({
      type: "POST",
      url: "ajax.php",
      data: {'function': 'update','state': state,'file': file},
      dataType: "json",
      success: function(data) {
        if(data.text){
          /* manage data */
          for (var i = 0; i < data.text.length; i++) {
            $('#chat-row').append($("  "+ data.text[i] +"
            "));
          }
        }
        /* manage position of current chat */
        document.getElementById('chat-row').scrollTop = document.getElementById('chat-row').scrollHeight;
        instanse = false;
        state = data.state;
      }
    });
  }
  else {
    setTimeout(updateChat, 1000);
  }
}
//define send chat function
function sendChat(msg, name) {
  updateChat();
  /* define AJAX function */
  $.ajax({
    type: "POST",
    url: "ajax.php",
    /* manage message */
    data: {'function': 'send','message': msg,'nickname': name,'file': file},
    dataType: "json",
    success: function(data){
      updateChat();
    }
  });
}
