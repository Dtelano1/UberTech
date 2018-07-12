Template.profile.events({
  "click .button": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#reviewGeorge").val();
    const name = $("#nameGeorge").val();
    const rating = $("#js-ratingsGeorge").val();
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
