'use strict';

exports.__esModule = true;
exports.default = isStrongPassword;
var passwordValidator = function passwordValidator(data) {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(data);
};

function isStrongPassword(data) {
    if (!passwordValidator(data)) {
        return 'Please use at least 6 characters, small, caps and numbers.';
    }

    return null;
}