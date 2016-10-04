"use strict";
const React = require("react");
const redux_form_1 = require("redux-form");
const field_wrapper_1 = require("./field-wrapper");
function TextFieldStateless(props) {
    const { input: { value, onChange, onBlur, onFocus }, autoComplete } = props;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        React.createElement("input", { type: "text", value: value, onChange: onChange, onBlur: onBlur, onFocus: onFocus, autoComplete: autoComplete }));
}
exports.TextFieldStateless = TextFieldStateless;
function TextField(props) {
    return React.createElement(redux_form_1.Field, { name: props.name, component: TextFieldStateless, autoComplete: props.autoComplete || "off", label: props.label });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TextField;
//# sourceMappingURL=text-field.js.map