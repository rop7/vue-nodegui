"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNText = exports.textPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
exports.textPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { wordWrap(widget, _, nextValue) {
        widget.setWordWrap(nextValue);
    },
    scaledContents(widget, _, nextValue) {
        widget.setProperty('scaledContents', nextValue);
    },
    openExternalLinks(widget, _, nextValue) {
        widget.setProperty('openExternalLinks', nextValue);
    } });
/** @internal */
class VNText extends nodegui_1.QLabel {
    insertChild() {
        throw new Error('Cannot add child to text elements');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.textPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot remove/add child to text elements');
    }
    insertBefore() {
        throw new Error('Cannot add child to text elements');
    }
    getNextSibling() {
        throw new Error('text elements cannot have children');
    }
}
exports.VNText = VNText;
//# sourceMappingURL=VNText.js.map