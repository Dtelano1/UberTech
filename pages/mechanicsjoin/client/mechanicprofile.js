Template.mechanicprofile.events({
  "click #js-submit"(event,instance){
    name = instance.$('#js-name').val();
    console.log('just read '+name);
    email = instance.$('#js-email').val();
    console.log('just read ' +email );
    phone = instance.$('#js-phone').val();
    zipcode = instance.$('#js-zipcode').val();
    education = instance.$('#js-education').val();
    iphone = $('#js-iphone').is(":checked");
    android = $('#js-android').is(":checked");
    imac = $('#js-imac').is(":checked");
    pc = $('#js-pc').is(":checked");
    console.log('just read ' + phone);
  /*  repairs = instance.$('#js-repairs').val();*/
  Profiles.insert(
    {name:name,
      owner:Meteor.userId(),
      iphone:iphone,
      android:android,
      imac:imac,
      pc:pc,
      email:email,
      phone:phone,
      zipcode:zipcode,
      education:education,
      rating:5,
      reviews:0});
    console.log(Profiles.findOne({name:name}));
  }
})
