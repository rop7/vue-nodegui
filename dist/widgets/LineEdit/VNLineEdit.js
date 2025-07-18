"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNLineEdit = exports.lineEditPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
exports.lineEditPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { text: (widget, _, nextValue) => {
        if (nextValue) {
            widget.setText(nextValue);
            return;
        }
        widget.clear();
    }, placeholderText: (widget, _, nextValue) => {
        widget.setPlaceholderText(nextValue);
    }, readOnly: (widget, _, nextValue) => {
        widget.setReadOnly(nextValue);
    }, echoMode: (widget, _, nextValue) => {
        widget.setEchoMode(nextValue);
    } });
/** @internal */
class VNLineEdit extends nodegui_1.QLineEdit {
    insertChild() {
        throw new Error('Cannot add child to line edits');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.lineEditPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot remove/add child to line edits');
    }
    insertBefore() {
        throw new Error('Cannot add child to line edits');
    }
    getNextSibling() {
        throw new Error('line edit cannot have children');
    }
}
exports.VNLineEdit = VNLineEdit;
//# sourceMappingURL=VNLineEdit.js.map