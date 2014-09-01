/**
 * Created by ankurb on 26-08-2014.
 */
define([
    "dojo/_base/declare",
    "dojo/query",
    "dojo/dom-style",
    "dijit/_WidgetBase",
    "dijit/_TemplatedMixin",
    "dojo/text!./../template/item.html",
    "dojo/NodeList-traverse",
    "dojo/domReady!"
],function(declare,query,domStyle,_WidgetBase,_TemplatedMixin,template){
    return declare([_WidgetBase, _TemplatedMixin], {
        templateString : template,
        baseClass : "",
        item : "",
        postCreate : function(){
            this.inherited(arguments);
        },

        _setItemAttr : function(item){
            this.itemNode.innerHTML = item;
            this.itemNode.id = item;
        },

        showMenu : function(evt) {
            var child = query(this.itemNode).children("ul");
            if(child[0]) {
                if (domStyle.get(child[0], "display") == "none") {
                    domStyle.set(child[0], "display", "block");
                } else {
                    domStyle.set(child[0], "display", "none");
                }
            }
            evt.stopPropagation();
        }
    });
});