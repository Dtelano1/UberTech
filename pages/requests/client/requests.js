Template.requests.events({
  "click #button-reveal": function(event,instance){
    //Meteor.call("test1",function(e,r){console.log(r)});
    localStorage.getItem(name);
    localStorage.getItem(device);
    localStorage.getItem(help);
    console.log(`values are ${JSON.stringify([name,device,help])}`)
    Reviews.insert({
      review:review, name:name, rating:rating,
    })
}
