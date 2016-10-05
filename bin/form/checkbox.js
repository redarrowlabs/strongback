"use strict";
const React = require("react");
const react_widgets_1 = require("react-widgets");
const redux_form_1 = require("redux-form");
const field_wrapper_1 = require("./field-wrapper");
function CheckboxStateless(props) {
    const { input: { value, onChange, }, options, } = props;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        React.createElement(react_widgets_1.SelectList, { data: options, value: value, onChange: onChange, multiple: true, valueField: 'value', textField: 'label' }));
}
exports.CheckboxStateless = CheckboxStateless;
/**
 * Checkbox is used to pick multiple values from a known set of options.
 */
class Checkbox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: CheckboxStateless, label: this.props.label, options: this.props.options });
    }
}
exports.Checkbox = Checkbox;
//# sourceMappingURL=checkbox.js.map