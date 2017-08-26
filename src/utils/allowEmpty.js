import {isEmpty, isNull} from 'lodash'
import applyRules from '../actions/applyRules'

export default function allowEmpty(rules) {
    let me = this;

    return (data) => {
        if (isEmpty(data) || isNull(data) || data === null) {
            return null;
        }

        return applyRules.call(me, rules, data);
    }
}
