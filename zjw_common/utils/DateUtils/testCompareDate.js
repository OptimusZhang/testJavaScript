/**
 * Created by jianwu.zhang on 2015/12/29.
 */
// compare date
var sDate = new Date(2015,12,10);
var bDate = new Date(2015,12,1);
var result = bDate - sDate;
if (result === 0) {
    console.log("bDate:  "+"="+"  sDate:");
}
if (result < 0) {
    console.log("bDate:  "+"<"+"  sDate:");
}
if (result > 0) {
    console.log("bDate:  "+">"+"  sDate:");
}