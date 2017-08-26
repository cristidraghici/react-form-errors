import {isNull} from 'lodash'

export default function notNull(data) {
    if (isNull(data)) {
        return 'Mandatory field.';
    }

    return null
}
