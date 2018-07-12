Template.searchresults.helpers({
  profiles: function(){
    const profiles = Profiles.find({}).fetch()
  }
})
