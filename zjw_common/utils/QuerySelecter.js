/**
 * Created by jianwu.zhang on 2016/02/01.
 */
define(['./ZJWCore.js'], function(ZJWUI){
    'use strict';

    ZJWUI.query = function(selector) {
        return document.querySelector(selector);
    };

    ZJWUI.queryAll = function(selector) {
        return document.querySelectorAll(selector);
    };
});