'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = findErrors;

var _lodash = require('lodash');

var _applyRules = require('./applyRules');

var _applyRules2 = _interopRequireDefault(_applyRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function findErrors(existingErrors, rules, data, field, value) {
    var errors = _extends({}, existingErrors);

    if (field && value !== undefined) {
        if (rules[field]) {
            errors[field] = (0, _applyRules2.default)(rules[field], value || data[field] || null);
        }
    } else {
        (0, _lodash.each)(rules, function (val, idx) {
            errors[idx] = (0, _applyRules2.default)(val, data[idx] || null);
        });
    }

    return errors;
}