'use strict';

exports.__esModule = true;
exports.default = applyRules;

var _lodash = require('lodash');

function applyRules(rules, data) {
    var _this = this;

    var error = null;

    // List of rules
    if ((0, _lodash.isArray)(rules)) {
        (0, _lodash.each)(rules, function (val, idx) {
            if (!error) {
                error = val.call(_this, data);
            }

            if (!(0, _lodash.isNull)(error)) {
                return;
            }
        });
    }

    // Just one rule
    if ((0, _lodash.isFunction)(rules)) {
        error = rules.call(this, data);
    }

    return error;
};