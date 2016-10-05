"use strict";
const React = require("react");
/** Wraps a field with a label and error message area. */
class FieldWrapper extends React.Component {
    render() {
        const { fieldProps: { meta: { touched, error }, label, }, children, mode } = this.props;
        const err = touched && error;
        //For multiple inputs in children
        if (mode === "no-wrap") {
            return React.createElement("div", null,
                React.createElement("label", null,
                    React.createElement("div", null, label)),
                children,
                React.createElement("div", null, err));
        }
        return React.createElement("div", null,
            React.createElement("label", null,
                React.createElement("div", null, label),
                children),
            React.createElement("div", null, err));
    }
}
exports.FieldWrapper = FieldWrapper;
//# sourceMappingURL=field-wrapper.js.map