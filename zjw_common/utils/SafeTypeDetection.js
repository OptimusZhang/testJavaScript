/**
 * Created by jianwu.zhang on 2016/02/01.
 */
define(['./ZJWCore.js'], function(ZJWUI){
    'use strict';

    // to avoid the bug about the Array in multipul frames.
    ZJWUI.isArray = function (value) {
        return Object.prototype.toString.call(value) == 'Object Array';
    };

    // to avoid the bug about the RegExp,use bellow to check a function.
    ZJWUI.isFunction = function () {
        return Object.prototype.toString.call(value) == 'Object Function';
    };

    ZJWUI.isRegExp = function () {
        return Object.prototype.toString.call(value) == 'Object RegExp';
    };
});