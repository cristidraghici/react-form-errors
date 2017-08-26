let phoneValidator = (data) => {
    var re = /^-?\d+\.?\d*$/;
    return re.test(data);
};

export default function isPhone(data) {
    if (!phoneValidator(data)) {
        return 'Invalid phone number.';
    }

    return null
}
