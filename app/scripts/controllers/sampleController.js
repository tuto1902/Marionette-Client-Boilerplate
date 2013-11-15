define([
    'marionette'
], 
function(
    Marionette
){
    var SampleController = Marionette.Controller.extend({

        initialize: function(){
            this.options = {
                // define the views for this controller
                views: {}
            };
        },

        sampleFunction: function(){
            // implement the controller functionality, like displaying a view
        }
    });

  return SampleController;
});
