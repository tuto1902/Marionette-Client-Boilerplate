define([
	'backbone'
], function(Backbone) {
	var Sample = Backbone.Model.extend({
		urlRoot: '/sample',

		defaults: {
    }
	});


	return Sample;
});
