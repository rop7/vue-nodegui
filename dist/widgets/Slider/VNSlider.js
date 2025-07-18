"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNSlider = exports.sliderPropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
exports.sliderPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { tickInterval(widget, _, nextValue) {
        widget.setTickInterval(nextValue);
    },
    tickPosition(widget, _, nextValue) {
        widget.setTickPosition(nextValue);
    },
    invertedAppearance(widget, _, nextValue) {
        widget.setInvertedAppearance(nextValue);
    },
    invertedControls(widget, _, nextValue) {
        widget.setInvertedControls(nextValue);
    },
    maximum(widget, _, nextValue) {
        widget.setMaximum(nextValue);
    },
    minimum(widget, _, nextValue) {
        widget.setMinimum(nextValue);
    },
    orientation(widget, _, nextValue) {
        widget.setOrientation(nextValue);
    },
    pageStep(widget, _, nextValue) {
        widget.setPageStep(nextValue);
    },
    singleStep(widget, _, nextValue) {
        widget.setSingleStep(nextValue);
    },
    isSliderDown(widget, _, nextValue) {
        widget.setSliderDown(nextValue);
    },
    sliderPosition(widget, _, nextValue) {
        widget.setSliderPosition(nextValue);
    },
    hasTracking(widget, _, nextValue) {
        widget.setTracking(nextValue);
    },
    value(widget, _, nextValue) {
        widget.setValue(nextValue);
    } });
/** @internal */
class VNSlider extends nodegui_1.QSlider {
    insertChild() {
        throw new Error('Cannot add child to slider elements');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.sliderPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot add child to slider elements');
    }
    insertBefore() {
        throw new Error('Cannot add child to slider elements');
    }
    getNextSibling() {
        throw new Error('Cannot add child to slider elements');
    }
}
exports.VNSlider = VNSlider;
//# sourceMappingURL=VNSlider.js.map