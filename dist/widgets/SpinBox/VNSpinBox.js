"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNSpinBox = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
const spinBoxPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { prefix(widget, _, prefix) {
        widget.setPrefix(prefix);
    },
    suffix(widget, _, suffix) {
        widget.setSuffix(suffix);
    },
    singleStep(widget, _, step) {
        widget.setSingleStep(step);
    },
    range(widget, _, range) {
        widget.setRange(range.minimum, range.maximum);
    },
    value(widget, _, value) {
        widget.setValue(value);
    } });
/** @internal */
class VNSpinBox extends nodegui_1.QSpinBox {
    patchProp(key, prevValue, nextValue) {
        const propSetter = spinBoxPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    insertChild() {
        throw new Error('Cannot add child to SpinBox elements');
    }
    getNextSibling() {
        throw new Error('SpinBox elements cannot have children');
    }
    insertBefore() {
        throw new Error('Cannot add child to SpinBox elements');
    }
    removeChild() {
        throw new Error('Cannot remove/add child to SpinBox elements');
    }
}
exports.VNSpinBox = VNSpinBox;
//# sourceMappingURL=VNSpinBox.js.map