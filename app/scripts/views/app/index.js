define([
    'marionette',
    'jquery',
    'underscore',
    'text!templates/app/index.html'
], 
function(
    Marionette,
    $, 
    _,
    indexViewTemplate
){
    var IndexView = Marionette.ItemView.extend({
        template: _.template(indexViewTemplate),
        id: 'index-view'
    });


    return IndexView;
});
