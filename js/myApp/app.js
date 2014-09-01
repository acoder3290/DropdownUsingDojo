/**
 * Created by ankurb on 26-08-2014.
 */
require([
    "dojo/dom",
    "myApp/widget/menu"
],function(dom,Menu) {

    var menuBar = new Menu({
        "baseClass" : "menuWidget",
        "menu" : [
            {"item" : "abc"},
            {"item" : "a"},
            {"item" : "b"}
        ]
    }).placeAt(dom.byId("menuContainer"));

    new Menu({
        "baseClass" : "submenu",
        "menu" : [{"item" : "d"},{"item" : "e"},{"item" : "f"},{"item" : "g"}]
    }).placeAt(dom.byId("abc"));

    new Menu({
        "baseClass" : "submenu",
        "menu" : [{"item" : "1"},{"item" : "2"},{"item" : "3"},{"item" : "4"}]
    }).placeAt(dom.byId("a"));

    new Menu({
        "baseClass" : "submenu",
        "menu" : [{"item" : "5"},{"item" : "6"},{"item" : "7"},{"item" : "8"}]
    }).placeAt(dom.byId("b"));
});