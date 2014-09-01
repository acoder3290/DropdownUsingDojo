/**
 * Created by ankurb on 26-08-2014.
 */
define([
    "dojo/_base/array",
    "dojo/_base/declare",
    "dojo/dom-style",
    "myApp/widget/item",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./../template/menu.html",
    "dojo/domReady!"
],function(array, declare,domStyle,Item,_WidgetBase,_TemplatedMixin,template){
        return declare([_WidgetBase, _TemplatedMixin], {
            templateString : template,
            baseClass : "",
            menu : [],
            postCreate : function(){
                var domNode = this.domNode;
                this.inherited(arguments);
                array.forEach(this.menu, function(item) {
                    new Item(item).placeAt(domNode);
                });
            },

            _setMenuAttr : function(){
                var menuNode = this.menuNode;
                var baseClass = menuNode.className;
                if(baseClass !== "menuWidget"){
                    domStyle.set(menuNode, "display", "none");
                }else{
                    domStyle.set(menuNode, "display", "inline-block");
                }
            }
        });
 });