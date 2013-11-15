define([
    'backbone',
    'underscore',
    'models/sample'
], 
function(
    Backbone, 
    _,
    Sample
){
    var Samples = Backbone.Collection.extend({
        model: Sample,
        url: '/samples',

        initialize: function() {

        }

    });


    return Samples;
});
