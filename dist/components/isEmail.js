'use strict';

exports.__esModule = true;
exports.default = isEmailValidator;

var _isEmail = require('validator/lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isEmailValidator(data) {
    if (!(0, _isEmail2.default)(String(data))) {
        return 'Email format required.';
    }

    return null;
}