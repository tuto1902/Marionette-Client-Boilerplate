require([
  'application'
], function(Application) {

	/**
	 * Custom namespace 'vrds' is for attaching application/root-level variables;
	 * we don't want to pollute the general global space with variables.
	 * @type {Object}
	 */
	window.vrds = {};

	/**
	 * Root Application instance
	 * @type {Application}
	 */
	vrds.application = Application;

	vrds.application.start();
});