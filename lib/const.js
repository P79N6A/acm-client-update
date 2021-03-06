'use strict';

exports.DEFAULT_GROUP = 'DEFAULT_GROUP';
exports.DATAID_SERVER_LIST = 'com.taobao.diamond.serverlist';

exports.LINE_SEPARATOR = String.fromCharCode(1);
exports.WORD_SEPARATOR = String.fromCharCode(2);

exports.VERSION = 'nodejs-diamond-client/' + require('../package.json').version;
exports.CURRENT_UNIT = 'CURRENT_UNIT';

exports.HTTP_OK = 200;
exports.HTTP_NOT_FOUND = 404;
exports.HTTP_CONFLICT = 409;
exports.HTTP_UNAVAILABLE = 503; // 被限流
