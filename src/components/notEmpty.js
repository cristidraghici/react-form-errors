import {isEmpty} from 'lodash'

export default function notEmpty(data) {
    if (isEmpty(data)) {
        return 'Cannot be empty.';
    }

    return null
}
