/**
 * Created by Administrator on 2016/2/1 0001.
 */
var LogUtil = require('./LogUtil');

LogUtil.consoleLogger.info("****.js start");
LogUtil.fileLogger.info("test.js info");
LogUtil.dateLogger.info("test.js info");

LogUtil.consoleLogger.debug("test.js debug");
LogUtil.fileLogger.debug("test.js debug");
LogUtil.dateLogger.debug("test.js debug");

LogUtil.consoleLogger.warn("test.js warn");
LogUtil.fileLogger.warn("test.js warn");
LogUtil.dateLogger.warn("test.js warn");

console.log("test.js console.log");