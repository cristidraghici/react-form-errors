import isEmail from 'validator/lib/isEmail';

export default function isEmailValidator(data) {
    if (!isEmail(String(data))) {
        return 'Email format required.';
    }

    return null
}
