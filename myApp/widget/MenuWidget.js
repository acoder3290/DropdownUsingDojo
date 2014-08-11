/**
 * Created by ankurb on 08-08-2014.
 */
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/menu.html"
], function(declare, _WidgetBase, _TemplateMixin, menu) {
    return declare([_WidgetBase, _TemplateMixin], {
        templateString : menu,
        baseClass : "menuWidget",

        postCreate : function(){
            this.inherited(arguments);
        }
    });
});