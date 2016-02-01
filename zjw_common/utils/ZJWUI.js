/**
 * Created by jianwu.zhang on 2016/01/11.
 */
(function (){
    var ZJWUI = {};
    window.ZJWUI = ZJWUI;

    ZJWUI.query = function(selector) {
        return document.querySelector(selector);
    };

    ZJWUI.queryAll = function(selector) {
        return document.querySelectorAll(selector);
    };
})();
