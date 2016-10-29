/**
 * Created by jianwu.zhang on 2016/02/01.
 */
define(['./ZJWCore.js'], function(ZJWUI){
    'use strict';

    // to avoid the bug about the Array in multi frames.
    ZJWUI.isArray = function (value) {
        return Object.prototype.toString.call(value).toLowerCase() == '[object array]';
    };

    // to avoid the bug about the RegExp,use bellow to check a function.
    ZJWUI.isFunction = function (value) {
        return Object.prototype.toString.call(value).toLowerCase() == '[object function]';
    };

    ZJWUI.isRegExp = function (value) {
        return Object.prototype.toString.call(value).toLowerCase() == '[object regexp]';
    };
});