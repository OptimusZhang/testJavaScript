/**
 * Created by jianwu.zhang on 2015/12/29.
 */
'use strict';

// getCurrentTime
var getCurrentTime = function () {
    return new Date();
};
console.log("getCurrentTime:" + getCurrentTime());

// getCurrentTime
var getTimeByYMD = function (year, month, day) {
    return new Date(year, month, day);
};
console.log("getTimeByYMD:" + getTimeByYMD(2011,12,1));

var newDateYMD = new Date('2015/02/01');
console.log("newDateY:" + newDateYMD);

var dateParse = Date.parse("Feb 1, 2015");
console.log("dateParse:" + dateParse);







