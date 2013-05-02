define( [
	'marionette',
  'router',
  'underscore',
  'controllers/sampleController',
  'views/app/index'
], function(
		Marionette,
		Router,
		_,
		SampleController,
		IndexView
	){

  //instantiate the app
  var application = new Marionette.Application();

  //INITIALIZERS////////////////////////////////////////////////////// 

	//router & controllers
	application.addInitializer(function(options){
		this.router = new Router();

		this.controllers = {
			sample: new SampleController()
		};   

		this.router.controllers = this.controllers;
	});
	

  //models
  application.addInitializer(function(options){

	});


  //root-level regions
  application.addInitializer(function(options){
  	var body = $(document.body);
  	var container = $("<div/>").attr("id", "vrds-container");

  	body.append(container);

  	application.addRegions({
	    'index':  new Marionette.Region({ el: "#vrds-container" })
	  });

  	//display
	  this.container.show(new IndexView());
  });
	////////////////////////////////////////////////////////////////////


	//starts upon final initializer execution completion
	application.on('start', function(options) {
		Backbone.history.start();
	});


  //export the app from this module
  return application;
});