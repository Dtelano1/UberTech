Template.layout.helpers({
  mechObject: function(){
    return Profiles.findOne({owner:Meteor.userId()})
  }
})
