Template.genericprofile.events({
  "click .button": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#review").val();
    const name = $("#name").val();
    const rating = $("#rating").val();
    const hiddenID= instance.$('#hiddenID').val();
    console.log("review="+review)
    if(review==""||rating==""||name==""){
      alert("invalid entry");
    }
    else {
      Reviews.insert({review:review, name:name, rating:rating, mechanic:hiddenID});
    }
  }
})


Template.genericreview.helpers({
  reviewList: function() {
    return Reviews.find({mechanic:instance.$('#hiddenID').val()}).fetch();
  }
})
