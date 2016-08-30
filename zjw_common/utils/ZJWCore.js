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

    window.ZJWUI = ZJWUI;
    return ZJWUI;
});
