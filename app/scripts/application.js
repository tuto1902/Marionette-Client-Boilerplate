define([
    'marionette',
    'router',
    'underscore',
    'controllers/sampleController',
    'views/app/index'
], 
function(
	Marionette,
	Router,
	_,
	SampleController,
	IndexView
){

    //instantiate the app
    var application = new Marionette.Application();

	//router & controllers
	application.addInitializer(function(options){
		this.router = new Router();
		// Add more controllers as you see fit
		this.router.controllers = {
			sample: new SampleController()
		};
	});


    //root-level regions
    application.addInitializer(function(options){
        // Add more regions to the main index.html and reflect them here as needed
        application.addRegions({
            'main': new Marionette.Region({ el:'#main' })
        });
    
        //display the main index view
        this.main.show(new IndexView());
    });
    


	//starts upon final initializer execution completion
	application.on('start', function(options) {
		Backbone.history.start();
	});


    /**
	 * Custom namespace 'myapp' is for attaching application/root-level variables;
	 * we don't want to pollute the general global space with variables.
	 * @type {Object}
	 */
    window.myapp = {};

	/**
	 * Root Application instance
	 * @type {Application}
	 */
	myapp.application = application;

	myapp.application.start();
});