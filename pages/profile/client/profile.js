Template.profile.events({
  "click #button-review": function(event,instance){
    //Meteor.call("test1",function(e,r){console.log(r)});
    const review = $("#review").val();
    const name = $("#name").val();
    const rating = $("#js-ratings").val();
    $("#review").val("");
    $("#name").val("");
    $("#js-ratings").val("");
    console.log(`values are ${JSON.stringify([review,name,rating])}`)
    if(review==""||rating==""||name==""){
      alert("invalid entry")
    }
    else {
      Reviews.insert({
          review:review, name:name, rating:rating,
      });
    }
  },

    "click #button-request": function(event,instance){
      //Meteor.call("test2",function(e,r){console.log(r)});
      const device = $("#submit-device").val();
      const help = $("#submit-help").val();
      $("#submit-device").val("")
      $("#submit-help").val("");
      console.log(`values are ${JSON.stringify([device,help])}`)
      Requests.insert({
        device:device, help:help,
      });

    }




});

Template.profile.helpers({
  Reviews: function() {
    return Reviews.find().fetch()
  }
})
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
*/
