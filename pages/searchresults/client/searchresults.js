Template.searchresults.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    zipinfo:[],
  });
});

Template.searchresults.helpers({
  profiles: function(){
    const instance = Template.instance();
    const nearbyzips = instance.state.get("zipinfo").zip_codes;
    console.log("nearbyzips = "+JSON.stringify(nearbyzips))
    console.dir(nearbyzips)
    return Profiles.find({zipcode:{$in:nearbyzips}});
  }
})

Template.searchresults.events({
  "click #search-js"(event,instance){
    const zipcode = instance.$("#zipcode-selection-input").val()
    const distance = instance.$("#distance").val()
    console.log('zipcode is '+zipcode)
    const nearbyzips = ['02143','02142','02441']

    Meteor.apply("getNearbyZips",[zipcode,distance],{returnStubValue:true},
      function(error,result){
        console.dir(['er',error,result]);
        if (error) {
          instance.state.set("zipinfo",[]);
          return;
        }
        const r = JSON.parse(result);
        console.log("zipinfo parsed as "+JSON.stringify(r));
        console.dir(['zipcode',r]);
        instance.state.set("zipinfo",r);
      })

  }
})
