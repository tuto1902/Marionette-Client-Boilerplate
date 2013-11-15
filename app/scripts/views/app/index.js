define([
    'jquery',
    'underscore',
    'text!templates/app/index.html'
], 
function(
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
