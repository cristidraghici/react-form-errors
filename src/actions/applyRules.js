import {isArray, each, isNull, isFunction} from 'lodash'

export default function applyRules(rules, data) {
    let error = null;

    // List of rules
    if (isArray(rules)) {
        each(rules, (val, idx) => {
            if (!error) {
                error = val.call(this, data);
            }

            if (!isNull(error)) {
                return;
            }
        });
    }

    // Just one rule
    if (isFunction(rules)) {
        error = rules.call(this, data);
    }

    return error;
};
