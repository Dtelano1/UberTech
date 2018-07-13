Router.configure({
	layoutTemplate: 'layout',
	//loadingTemplate: 'loading',
	//waitOn: function() {return true;}   // later we'll add more interesting things here ....
});

Router.route('/', {name: 'home'});
Router.route('userList');
Router.route('demo');
Router.route('chat');
Router.route('about');
Router.route('pokemon');
Router.route('Forums');
Router.route('searchresults');
Router.route('contact');

Router.route('pokemonData/:_id',
{name:"pokemonData",
 data: function(){
	 const c = Pokedex.findOne(this.params._id);
   c.ename = c.ename.toLowerCase()
	 return c;
 }});


 Router.route('genericprofile/:_id',
 {name:"genericprofile",
  data: function(){
 	 const c = Profiles.findOne(this.params._id);
 	 return c;
  }});


Router.route('apidemo');

Router.route('SignUp');

Router.route('WelcomeBack');

Router.route('firefly');

Router.route('FAQs');

Router.route('sponsors')

Router.route('company')

Router.route('draw')

Router.route('graphics')

Router.route('profile');

Router.route('requests');

Router.route('mechanicprofile');
Router.route('fbusers')
Router.route('fbtimeline')

Router.route('game');
