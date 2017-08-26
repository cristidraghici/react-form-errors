'use strict';

exports.__esModule = true;
exports.default = isPhone;
var phoneValidator = function phoneValidator(data) {
    var re = /^-?\d+\.?\d*$/;
    return re.test(data);
};

function isPhone(data) {
    if (!phoneValidator(data)) {
        return 'Invalid phone number.';
    }

    return null;
}