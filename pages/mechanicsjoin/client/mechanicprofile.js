Template.mechanicprofile.events({
  "click #js-submit"(event,instance){
    name = instance.$('#js-name').val();
    console.log('just read '+name);
    email = instance.$('#js-email').val();
    console.log('just read ' +email );
    phone = instance.$('#js-phone').val();
    console.log('just read ' + phone);
    iphone = instance.$("#js-iphone").is(':checked');
    console.log('just read ' + iphone);
    android = instance.$("#js-android").is(':checked');
    console.log('just read ' + android);
    imac = instance.$("#js-imac").is(':checked');
    console.log('just read ' + imac);
    pc = instance.$("#js-pc").is(':checked');
    console.log('just read ' + pc);
    this.user.name = name;
    this.user.email = email;
    this.user.phone = phone;
    this.user.iphone = iphone;
    this.user.android = android;
    this.user.imac = imac;
    this.user.pc = pc;
    Profiles.update(this.user._id,this.user);
  }
})
