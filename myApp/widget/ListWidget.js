/**
 * Created by ankurb on 08-08-2014.
 */
define([
    "dojo/_base/declare",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/list.html"
], function(declare, _WidgetBase, _TemplateMixin, list) {
    return declare([_WidgetBase, _TemplateMixin], {
        name : "default",
        templateString : list,
        baseClass : "listWidget",

        postCreate : function(){
            this.inherited(arguments);
        }
    });
});