import {size} from 'lodash'

export default function minLength(length, cannotBeEqual) {
    return (data) => {
        if (!cannotBeEqual && size(data) >= length) {
            return null;
        }
        if (size(data) > length) {
            return null;
        }

        return 'The minimum length is: ' + String(length) + ' characters.';
    }
}
