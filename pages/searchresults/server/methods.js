
Meteor.methods({

  "getNearbyZips":
  function(zip,distance){
    console.log("'"+zip+"'");
    //using this API https://www.zipcodeapi.com/API
    const ZipCodeAPIkey =
     "bn9Gd0r9Je7KOQW7oAC95Lq2AsFetdZFB9lO9MYT16DQWzXkaAuflVhWnXaRaawL";
     //"pMocCOW2qcloL7ungr6qZ3wPCp1vZTNoFcBi1xkrJFPvMkS3LZtL30AFqBbpuZOa";
    const url =
        "https://www.zipcodeapi.com/rest/"+
        ZipCodeAPIkey +
        "/radius.json/"+
        zip +
        "/" +
        distance +
        "/miles?minimal";


    console.log(url);

    const z = Meteor.http.call("get",url);
    console.dir(z)
    return z.content;
  },


})
