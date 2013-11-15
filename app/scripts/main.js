requirejs.config({
  baseUrl: 'scripts/',
  paths: {
    jquery: 'vendor/jquery/jquery',
    bootstrap: 'vendor/bootstrap/dist/js/bootstrap',
    underscore: 'vendor/underscore-amd/underscore',
    backbone: 'vendor/backbone-amd/backbone',
    marionette: 'vendor/backbone.marionette/lib/backbone.marionette',
    wreqr: 'vendor/backbone.wreqr/lib/amd/backbone.wreqr',
    text: 'vendor/requirejs-text/text',
    button: 'vendor/bootstrap-assets/js/bootstrap-button',
    tab: 'vendor/bootstrap-assets/js/bootstrap-tab',
    modal: 'vendor/bootstrap-assets/js/bootstrap-modal',
    templates: '../templates'
  },
  shim: {
    bootstrap:{
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


requirejs(['application']);
