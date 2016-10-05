"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const React = require("react");
const ReactSelect = require("react-select");
const redux_form_1 = require("redux-form");
const field_wrapper_1 = require("./field-wrapper");
const lodash_1 = require("lodash");
function SearchNSelectStateless(props) {
    const { input: { value, onChange, onBlur, onFocus }, options, onSearch, isLoading } = props;
    return React.createElement(field_wrapper_1.FieldWrapper, { fieldProps: props },
        React.createElement(ReactSelect, { options: options, value: value, onChange: onChange, onBlur: () => onBlur(value), onFocus: onFocus, onInputChange: onSearch, filterOptions: identity, isLoading: isLoading }));
}
exports.SearchNSelectStateless = SearchNSelectStateless;
const initialState = {
    options: [],
    isLoading: false
};
/**
 * Search-n-select is used to pick a value from a remote service.
 */
class SearchNSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState;
        this.handleSearch = this.handleSearch.bind(this);
        this.debouncedSearch = lodash_1.debounce(this.handleSearch, 200);
    }
    render() {
        return React.createElement(redux_form_1.Field, { name: this.props.name, component: SearchNSelectStateless, label: this.props.label, onSearch: this.debouncedSearch, options: this.state.options, isLoading: this.state.isLoading });
    }
    debouncedSearch(_) {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    handleSearch(search) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(search);
            this.setState({
                isLoading: true
            }, () => __awaiter(this, void 0, void 0, function* () {
                const results = yield this.props.onSearch(search);
                this.setState({
                    options: results,
                    isLoading: false
                });
            }));
        });
    }
}
exports.SearchNSelect = SearchNSelect;
function identity(o) {
    return o;
}
//# sourceMappingURL=search-n-select.js.map