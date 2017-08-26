'use strict';

exports.__esModule = true;
exports.default = isAddress;

var _lodash = require('lodash');

var addressValidator = function addressValidator(data) {
    return (0, _lodash.size)(data) > 5;
};

function isAddress(data) {
    if (!addressValidator(data)) {
        return 'Invalid address.';
    }

    return null;
}