import applyRules from '../actions/applyRules'

export default function onlyIf(rules, condition) {
    let me = this;

    return (data) => {
        if (!condition) {
            return null;
        }

        return applyRules.call(me, rules, data);
    }
}
