'use strict';

exports.__esModule = true;
exports.default = allowEmpty;

var _lodash = require('lodash');

var _applyRules = require('../actions/applyRules');

var _applyRules2 = _interopRequireDefault(_applyRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function allowEmpty(rules) {
    var me = this;

    return function (data) {
        if ((0, _lodash.isEmpty)(data) || (0, _lodash.isNull)(data) || data === null) {
            return null;
        }

        return _applyRules2.default.call(me, rules, data);
    };
}