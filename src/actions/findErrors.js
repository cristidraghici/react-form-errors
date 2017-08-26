import {each} from 'lodash'
import applyRules from './applyRules'

export default function findErrors(existingErrors, rules, data, field, value) {
    let errors = {
        ...existingErrors
    };

    if (field && value !== undefined) {
        if (rules[field]) {
            errors[field] = applyRules(rules[field], value || data[field] || null)
        }
    } else {
        each(rules, (val, idx) => {
            errors[idx] = applyRules(val, data[idx] || null);
        });
    }

    return errors;
}
