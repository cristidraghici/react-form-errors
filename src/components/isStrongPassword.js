let passwordValidator = (data) => {
    var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    return re.test(data);
};

export default function isStrongPassword(data) {
    if (!passwordValidator(data)) {
        return 'Please use at least 6 characters, small, caps and numbers.';
    }

    return null
}
