Template.searchresults.helpers({
  profiles: function(){
    return Profiles.find({}).fetch();
  }
})
