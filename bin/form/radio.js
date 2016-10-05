"use strict";
const React = require("react");
const react_widgets_1 = require("react-widgets");
const redux_form_1 = require("redux-form");
const field_wrapper_1 = require("./field-wrapper");
function RadioStateless(props) {
    const { input: { value, onChange, }, options, } = props;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props, mode: "no-wrap" },
        React.createElement(react_widgets_1.SelectList, { data: options, value: value, onChange: onChange, valueField: 'value', textField: 'label' }));
}
exports.RadioStateless = RadioStateless;
/**
 * Radio is used to pick a single from a known set of options.
 */
class Radio extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: RadioStateless, label: this.props.label, options: this.props.options });
    }
}
exports.Radio = Radio;
//# sourceMappingURL=radio.js.map