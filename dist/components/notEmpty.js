'use strict';

exports.__esModule = true;
exports.default = notEmpty;

var _lodash = require('lodash');

function notEmpty(data) {
    if ((0, _lodash.isEmpty)(data)) {
        return 'Cannot be empty.';
    }

    return null;
}