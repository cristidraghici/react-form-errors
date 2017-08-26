# react-form-errors

Helper functions for validating React forms.

## Available functions

### Actions

- applyRules
- findErrors
- validateItem

### Components

- isAddress(str)
- isEmail(str)
- isPhone(str)
- isStrongPassword(str)
- maxLength(len, cannotBeEqual)
- minLength(len, cannotBeEqual)
- notEmpty(str)
- notNull(str)

### Utils

- allowEmpty
- hasErrors
- onlyIf

## Example usage

validate.js

```javascript
import {validateItem, notNull, notEmpty, maxLength} from 'react-form-errors'

let Contact = (item) => {
    return {
        'subject': [
            notNull, notEmpty, maxLength(64)
        ],
        'message': [notNull, notEmpty, maxLength(256)]
    }
}

export {Contact, validateItem}
```

container.js

```javascript
import React, {Component} from 'react'
import {validateItem, Contact as ValidationRules} from './validate.js'


const mapStateToProps = (state, ownProps = {}) => {
    return {validateItem};
}

class ContactContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: {
                subject: '',
                message: ''
            },
            errors: {},
        };

        this.validateItem = this.props.validateItem.bind(this);
    }


    onSubmit = (e) => {
        e.preventDefault();

        // Check for errors
        let rules = ValidationRules(this.state.item);
        if (!this.validateItem(rules)) {
            return;
        }

        // Submit the form
        ...
    }

    ...
}

ContactContainer.propTypes = propTypes;

...
```
