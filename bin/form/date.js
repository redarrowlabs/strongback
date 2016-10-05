"use strict";
const React = require("react");
const redux_form_1 = require("redux-form");
const field_wrapper_1 = require("./field-wrapper");
class DateFieldStateless extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    render() {
        const { input: { value, onBlur, onFocus } } = this.props;
        return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: this.props },
            React.createElement("input", { type: "date", value: value, onChange: this.handleChange, onBlur: onBlur, onFocus: onFocus }));
    }
    handleChange(e) {
        const eventValue = e.target.value;
        let value = '';
        //limit years to 4 digits
        if (eventValue !== '') {
            const arr = eventValue.split('-');
            arr[0] = arr[0].substr(0, 4);
            value = arr.join('-');
        }
        this.props.input.onChange(value);
    }
}
exports.DateFieldStateless = DateFieldStateless;
function DateField(props) {
    return React.createElement(redux_form_1.Field, { name: props.name, component: DateFieldStateless, label: props.label });
}
exports.DateField = DateField;
//# sourceMappingURL=date.js.map