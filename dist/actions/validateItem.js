'use strict';

exports.__esModule = true;
exports.default = validateItem;

var _lodash = require('lodash');

var _findErrors = require('./findErrors');

var _findErrors2 = _interopRequireDefault(_findErrors);

var _hasErrors = require('../utils/hasErrors');

var _hasErrors2 = _interopRequireDefault(_hasErrors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateItem(rules) {
    // do not block or test if rules is empty
    if ((0, _lodash.size)(rules) === 0) {
        return false;
    }

    // get the errors and add them to the state
    var errors = (0, _findErrors2.default)(this.state.errors, rules, this.state.item);
    this.setState({ errors: errors });

    // return true if errors do not exist
    return !(0, _hasErrors2.default)(errors);
}