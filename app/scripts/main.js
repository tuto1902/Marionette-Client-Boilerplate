requirejs.config({
  baseUrl: 'scripts/',
  paths: {
    jquery: 'vendor/jquery/jquery',
    underscore: 'vendor/underscore-amd/underscore',
    backbone: 'vendor/backbone-amd/backbone',
    wreqr: 'vendor/backbone.wreqr/lib/amd/backbone.wreqr',
    marionette: 'vendor/marionette/lib/backbone.marionette',
    text: 'vendor/requirejs-text/text',
    button: 'vendor/bootstrap-assets/js/bootstrap-button',
    tab: 'vendor/bootstrap-assets/js/bootstrap-tab',
    modal: 'vendor/bootstrap-assets/js/bootstrap-modal',
    templates: '../templates'
  },
  shim: {
    cookie: {
      deps: ['jquery']
    },
    marionette: {
      deps: ['jquery', 'underscore', 'backbone'],
      exports: 'Marionette'
    },
    wreqr: {
      deps: ['backbone', 'marionette'],
      exports: 'Wreqr'
    }
  }
});


requirejs(['vrds']);
