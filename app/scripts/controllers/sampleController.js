define([
  'marionette'
], function(Marionette) {
  var SampleController = Marionette.Controller.extend({

    initialize: function(){
      this.options = {
        views: {
        }
      };
    },

    sampleFunction: function(){
      
    }
  });

  return SampleController;
});
