/**
 * Created by jianwu.zhang on 2016/02/01.
 */
define([],function (){
    'use strict';

    var ZJWUI = {};

    ZJWUI.bind = function (fn, context) {
      return function(){
          fn.apply(context, arguments);
      }
    };


    // not very good
    // 数组和object的复制,只是浅复制.
    ZJWUI.merge = function(to, from) {
        for (var key in from) {
            console.log("key:"+ key);
            if (key in to) {
                if (typeof to[key] === 'object'
                && Object.prototype.toString.call(to[key]).toLowerCase() === '[object object]'
                && !to[key].length) {
                    ZJWUI.merge(to[key], from[key]);
                } else {
                    to[key] = from[key];
                }
            } else {
                to[key] = from[key];
            }
        }

        return to;
    };


    window.ZJWUI = ZJWUI;
    return ZJWUI;
});
