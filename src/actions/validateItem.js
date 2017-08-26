import {size} from 'lodash'
import findErrors from './findErrors'
import hasErrors from './hasErrors'

export default function validateItem(rules) {
    // do not block or test if rules is empty
    if (size(rules) === 0) {
        return false;
    }

    // get the errors and add them to the state
    let errors = findErrors(this.state.errors, rules, this.state.item);
    this.setState({errors});

    // return true if errors do not exist
    return !hasErrors(errors);
}
