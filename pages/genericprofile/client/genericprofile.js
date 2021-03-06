Template.genericprofile.events({
  "click #button-review": function(event,instance){
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
      Reviews.insert({review:review, name:name, rating:rating, mechanic:this._id});
      var reviews = Reviews.find({mechanic:this._id}).fetch();
      var total = 0;
      for (var i = 0; i < reviews.length; i++) {
        total += parseInt(reviews[i].rating.split(" ")[0])
      }
      return total/(reviews.length);
      var finalRating = total/(reviews.length)
      Profiles.update({_id:this._id}, {$set:{rating:finalRating}})
      Profiles.update({id_:this._id}, {$set:{reviews:reviews.length}})
    }
  },
  "click #button-request": function(event,instance){
    //Meteor.call("test2",function(e,r){console.log(r)});
    const device = $("#submit-device").val();
    const help = $("#submit-help").val();
    $("#submit-device").val("")
    $("#submit-help").val("");
    console.log(`values are ${JSON.stringify([device,help])}`)
    if(help==""||device==""){
      alert("invalid entry");
    }
    else {
      Requests.insert({
        device:device, help:help, name:name, mechanic:this._id
      });
    }
  }
})


Template.genericprofile.helpers({
  Reviews: function() {
    return Reviews.find({mechanic:this._id});
  },
  Average: function() {
    var reviews = Reviews.find({mechanic:this._id}).fetch();
    var total = 0;
    for (var i = 0; i < reviews.length; i++) {
      total += parseInt(reviews[i].rating.split(" ")[0])
    }
    if (isNaN(total/(reviews.length))) {
      return 5
    } else {
      return Math.round(total/(reviews.length));
      var finalRating = Math.round(total/(reviews.length))
      Profiles.update({_id:this._id}, {$set:{rating:finalRating}})
    }
  },
  ReviewCount: function() {
    return Reviews.find({mechanic:this._id}).fetch().length
    var reviewNumber = Reviews.find({mechanic:this._id}).fetch().length
    Profiles.update({_id:this._id}, {$set:{reviews:reviewNumber}})
  }
})
