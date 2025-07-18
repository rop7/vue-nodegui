"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNDial = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
const dialPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { notchesVisible: (widget, _, nextValue) => {
        widget.setNotchesVisible(nextValue);
    }, wrapping: (widget, _, nextValue) => {
        widget.setWrapping(nextValue);
    }, notchTarget: (widget, _, nextValue) => {
        widget.setNotchTarget(nextValue);
    } });
/** @internal */
class VNDial extends nodegui_1.QDial {
    patchProp(key, prevValue, nextValue) {
        const propSetter = dialPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    insertChild() {
        throw new Error('Cannot add child to Dial elements');
    }
    getNextSibling() {
        throw new Error('Dial elements cannot have children');
    }
    insertBefore() {
        throw new Error('Cannot add child to Dial elements');
    }
    removeChild() {
        throw new Error('Cannot remove/add child to Dial elements');
    }
}
exports.VNDial = VNDial;
//# sourceMappingURL=VNDial.js.map