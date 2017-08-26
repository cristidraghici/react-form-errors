import {each, isNull} from 'lodash'

export default function hasErrors(errors) {
    let hasErrors = false;

    each(errors, (val, idx) => {
        if (!isNull(val)) {
            hasErrors = true;
            return;
        }
    })

    return hasErrors
}
