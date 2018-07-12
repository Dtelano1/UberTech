Template.profile.events({
  "click .button": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#review").val();
    const name = $("#name").val();
    const rating = $("#rating").val();
    console.log("review="+review)
    if(review==""||rating==""||name=="")
    return

    Reviews.insert({
        review:review, name:name, rating:rating,
    });
  }
});

Template.profile.helpers({
  Reviews: function() {
    return Reviews.find().fetch()
  }
})
