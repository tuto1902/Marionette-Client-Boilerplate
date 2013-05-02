define([
  'jquery',
  'text!templates/app/index.html',
  'text!templates/accounts/login.html',
  'underscore',
  'views/accounts/login'
], function($, indexViewTemplate, _) {
  var IndexView = Marionette.ItemView.extend({
    template: _.template(indexViewTemplate),
    id: 'vrds-app',
    className: 'container'
    
  });


  return IndexView;
});
