import {size} from 'lodash'

let addressValidator = (data) => {
    return size(data) > 5;
};

export default function isAddress(data) {
    if (!addressValidator(data)) {
        return 'Invalid address.';
    }

    return null
}
