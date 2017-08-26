'use strict';

exports.__esModule = true;
exports.default = minLength;

var _lodash = require('lodash');

function minLength(length, cannotBeEqual) {
    return function (data) {
        if (!cannotBeEqual && (0, _lodash.size)(data) >= length) {
            return null;
        }
        if ((0, _lodash.size)(data) > length) {
            return null;
        }

        return 'The minimum length is: ' + String(length) + ' characters.';
    };
}