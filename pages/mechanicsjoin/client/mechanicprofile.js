Template.mechanicprofile.events({
  "click #js-submit"(event,instance){
    name = instance.$('#js-name').val();
    console.log('just read '+name);
    email = instance.$('#js-email').val();
    console.log('just read ' +email );
    phone = instance.$('#js-phone').val();
    console.log('just read ' + phone);
    repairs = instance.$('#js-repairs').val();
    Profiles.insert({name:name,owner:Meteor.userId(),email:email,phone:phone,repairs:repairs});
    console.log(Profiles.findOne({name:name}));
  }
})
