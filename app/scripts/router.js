define([
    'backbone',
    'controllers/sampleController'
], 
function(
    Backbone, 
    SampleController
) {
    var Router = Backbone.Router.extend({
        routes: {
            'sampleRoute': 'sampleRouteHandler'
        },
        
        // The controllers are initialized in application.js line 24
        controllers: null,

        sampleRouteHandler: function() {
            this.controllers.sample.sampleFunction();
        }
    });


  return Router;
});
