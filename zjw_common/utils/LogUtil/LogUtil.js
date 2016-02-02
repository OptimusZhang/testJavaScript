/**
 * Created by jianwu.zhang on 2016/02/01.
 */
var log4js = require('../../../lib/js/log4js/log4js.js');
var log4jsConf = require('./log4jsConf.json');

log4js.configure(log4jsConf);

var fileLogger = log4js.getLogger(log4jsConf.logCategories.LOGFILE);
var dateLogger = log4js.getLogger(log4jsConf.logCategories.DATEFILE);
var consoleLogger = log4js.getLogger(log4jsConf.logCategories.CONSOLE);

exports.fileLogger = fileLogger;
exports.dateLogger = dateLogger;
exports.consoleLogger = consoleLogger;


// TODO usage
//var LogUtil = require('./LogUtil');
//
//LogUtil.consoleLogger.info("test.js info");
//LogUtil.fileLogger.info("test.js info");
//LogUtil.dateLogger.info("test.js info");
//
//LogUtil.consoleLogger.debug("test.js debug");
//LogUtil.fileLogger.debug("test.js debug");
//LogUtil.dateLogger.debug("test.js debug");
//
//LogUtil.consoleLogger.warn("test.js warn");
//LogUtil.fileLogger.warn("test.js warn");
//LogUtil.dateLogger.warn("test.js warn");
//
//console.log("test.js console.log");

