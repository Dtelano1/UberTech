Template.profile.events({
  "click .button": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#review").val();
    const name = $("#name").val();
    const rating = $("#js-ratings").val();
    console.log(`values are ${JSON.stringify([review,name,rating])}`)
    if(review==""||rating==""||name==""){
      alert("invalid entry")
    }
    else {
      Reviews.insert({
          review:review, name:name, rating:rating,
      });

    }



  }
});

Template.profile.helpers({
  Reviews: function() {
    return Reviews.find().fetch()
  }
})
