define([
'backbone',
'controllers/sampleController'
], function(Backbone, SampleController) {
  var Router = Backbone.Router.extend({
    routes: {
      'sampleRoute': 'sampleRouteHandler'
    },

    controllers: null

    sampleRouteHandler: function() {
      this.controllers.sample.sampleFunction();
    }
  });


  return Router;
});
