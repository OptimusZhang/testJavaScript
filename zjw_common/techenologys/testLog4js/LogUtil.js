/**
 * Created by jianwu.zhang on 2016/02/01.
 */
var log4js = require('./lib/log4js.js');
var log4jsConf = require('./log4jsConf.json');

log4js.configure(log4jsConf);

var fileLogger = log4js.getLogger(log4jsConf.logCategories.LOGFILE);
var dateLogger = log4js.getLogger(log4jsConf.logCategories.DATEFILE);
var consoleLogger = log4js.getLogger(log4jsConf.logCategories.CONSOLE);

exports.fileLogger = fileLogger;
exports.dateLogger = dateLogger;
exports.consoleLogger = consoleLogger;

