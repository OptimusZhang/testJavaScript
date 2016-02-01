/**
 * Created by jianwu.zhang on 2015/12/29.
 */
// compute the start and end time.
var startTime = Date.now();
for(var i=0; i<10000000; i++){}
var endTime = Date.now();
console.log("used time(ms):" + (endTime-startTime));