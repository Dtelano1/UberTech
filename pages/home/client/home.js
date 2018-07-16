Template.home.helpers({
  user: function() {
    if(Meteor.userId()) {
      return Profiles.findOne({owner:Meteor.userId()}).name
    }
  },
  isUser: function() {
      if(Meteor.userId()) {
        return true;
      }
      return false
    }
  }
})
