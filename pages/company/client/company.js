Template.company.events({
  "click #js-submit"(event,instance){
    CompName = instance.$('#js-name').val();
    console.log('just read '+name);
    CompEmail = instance.$('#js-email').val();
    console.log('just read ' +email );
    CompPhone = instance.$('#js-phone').val();
    Affiliation = instance.$('#js-affiliation').val();
    NumOfWorkers = instance.$('#js-education').val();
    OneLoc = $('#js-iphone').is(":checked");
    TwotoFiveLoc = $('#js-android').is(":checked");
    FivetoTenLoc = $('#js-imac').is(":checked");
    TenorMoreLoc = $('#js-pc').is(":checked");
    console.log('just read ' + phone);
    zipcodes = instance.$('#js-zipcode').val();
    /*repairs = instance.$('#js-repairs').val();*/
  /*  Profiles.insert({name:name,owner:Meteor.userId(),iphone:iphone,android:android,imac:imac,pc:pc,email:email,phone:phone,zipcode:zipcode,education:education,repairs:repairs,rating:5,reviews:0});
    console.log(Profiles.findOne({name:name}));*/
  }
})
