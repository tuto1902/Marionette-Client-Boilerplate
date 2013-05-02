define([
  'backbone',
  'models/sample',
  'underscore'
], function(Backbone, Sample, _) {
  var Samples = Backbone.Collection.extend({
    model: Sample,
    url: '/samples',

    initialize: function() {

    }

  });


  return Samples;
});
