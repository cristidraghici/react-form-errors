'use strict';

exports.__esModule = true;
exports.default = maxLength;

var _lodash = require('lodash');

function maxLength(length, cannotBeEqual) {
    return function (data) {
        if (!cannotBeEqual && (0, _lodash.size)(data) <= length) {
            return null;
        }
        if ((0, _lodash.size)(data) < length) {
            return null;
        }

        return 'The maximum length is: ' + String(length) + ' characters.';
    };
}