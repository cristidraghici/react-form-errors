'use strict';

exports.__esModule = true;
exports.default = hasErrors;

var _lodash = require('lodash');

function hasErrors(errors) {
    var hasErrors = false;

    (0, _lodash.each)(errors, function (val, idx) {
        if (!(0, _lodash.isNull)(val)) {
            hasErrors = true;
            return;
        }
    });

    return hasErrors;
}