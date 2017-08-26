'use strict';

exports.__esModule = true;
exports.default = notNull;

var _lodash = require('lodash');

function notNull(data) {
    if ((0, _lodash.isNull)(data)) {
        return 'Mandatory field.';
    }

    return null;
}