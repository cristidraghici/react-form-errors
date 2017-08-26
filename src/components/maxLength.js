import {size} from 'lodash'

export default function maxLength(length, cannotBeEqual) {
    return (data) => {
        if (!cannotBeEqual && size(data) <= length) {
            return null;
        }
        if (size(data) < length) {
            return null;
        }

        return 'The maximum length is: ' + String(length) + ' characters.';
    }
}
