'use strict';

exports.__esModule = true;
exports.default = onlyIf;

var _applyRules = require('../actions/applyRules');

var _applyRules2 = _interopRequireDefault(_applyRules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function onlyIf(rules, condition) {
    var me = this;

    return function (data) {
        if (!condition) {
            return null;
        }

        return _applyRules2.default.call(me, rules, data);
    };
}