Template.profile.events({
  "click .button": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#review").val();
    const name = $("#name").val();

    Reviews.insert({
        review:review, name:name
    });
  }
});

Template.profile.helpers({
  Reviews: function() {
    return Reviews.find().fetch()
  }
})
