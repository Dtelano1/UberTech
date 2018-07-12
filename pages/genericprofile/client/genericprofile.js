Template.genericprofile.events({
  "click .button": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#review").val();
    const name = $("#name").val();
    const rating = $("#rating").val();
    console.log("review="+review)
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

Template.genericprofile.helpers({
  reviewList: function() {
    return Reviews.find().fetch();
  }
  getProfileInfo: function(){
    return Profiles.findOne(_id:profileClicked);
    console.log('profileClicked');
  }
})
