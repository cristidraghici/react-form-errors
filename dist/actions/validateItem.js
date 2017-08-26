'use strict';

exports.__esModule = true;
exports.default = validateItem;

var _lodash = require('lodash');

var _Validator = require('./Validator');

function validateItem(rules) {
    // do not block or test if rules is empty
    if ((0, _lodash.size)(rules) === 0) {
        return false;
    }

    // get the errors and add them to the state
    var errors = (0, _Validator.findErrors)(this.state.errors, rules, this.state.item);
    this.setState({ errors: errors });

    // return true if errors do not exist
    return !(0, _Validator.hasErrors)(errors);
}