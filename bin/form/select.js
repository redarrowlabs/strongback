"use strict";
const React = require("react");
const ReactSelect = require("react-select");
const redux_form_1 = require("redux-form");
const field_wrapper_1 = require("./field-wrapper");
function SelectStateless(props) {
    const { input: { value, onChange, onBlur, onFocus }, options, } = props;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        React.createElement(ReactSelect, { options: options, value: value, onChange: onChange, onBlur: () => onBlur(value), onFocus: onFocus }));
}
exports.SelectStateless = SelectStateless;
/**
 * Select is used to pick a value from a known set of options.
 */
class Select extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: SelectStateless, label: this.props.label, options: this.props.options });
    }
}
exports.Select = Select;
//# sourceMappingURL=select.js.map