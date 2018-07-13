Template.genericprofile.events({
  "click .button": function(event,instance){
    Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#review").val();
    const name = $("#name").val();
    const rating = $("#rating").val().substr(0,1);
    const hiddenID = $('#hiddenID').val();
    console.log("review="+review);
    if(review==""||rating==""||name==""){
      alert("invalid entry");
    }
    else {
      Reviews.insert({review:review, name:name, rating:rating, mechanic:hiddenID});
    }
  }
})


Template.genericprofile.helpers({
  Reviews: function() {
    const hiddenID = $('#hiddenID').val();
    return Reviews.find({mechanic:hiddenID}).fetch()
  }
})
