"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNImage = exports.imagePropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const image_1 = require("../../utils/image");
const VNText_1 = require("../Text/VNText");
exports.imagePropsSetters = Object.assign(Object.assign({}, VNText_1.textPropsSetters), { src: (widget, _, nextValue) => {
        if (!nextValue) {
            return;
        }
        image_1.getLoadedPixmap(nextValue)
            .then((pixmap) => widget.setPixmap(pixmap))
            .catch(console.warn);
    }, buffer: (widget, _, nextValue) => {
        const pixMap = new nodegui_1.QPixmap();
        pixMap.loadFromData(nextValue);
        widget.setPixmap(pixMap);
    }, aspectRatioMode: (widget, _, nextValue) => {
        widget.setAspectRatioMode(nextValue);
    }, transformationMode: (widget, _, nextValue) => {
        widget.setTransformationMode(nextValue);
    } });
/** @internal */
class VNImage extends nodegui_1.QLabel {
    constructor() {
        super(...arguments);
        this.setPixmap = (pixmap) => {
            super.setPixmap(pixmap);
            this.originalPixmap = pixmap;
        };
    }
    setAspectRatioMode(mode) {
        this.aspectRatioMode = mode;
        this.scalePixmap(this.size());
    }
    setTransformationMode(mode) {
        this.transformationMode = mode;
        this.scalePixmap(this.size());
    }
    scalePixmap(size) {
        if (!this.originalPixmap)
            return;
        super.setPixmap(this.originalPixmap.scaled(size.width(), size.height(), this.aspectRatioMode, this.transformationMode));
    }
    insertChild() {
        throw new Error('Cannot add child to image elements');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.imagePropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot remove/add child to image elements');
    }
    insertBefore() {
        throw new Error('Cannot add child to image elements');
    }
    getNextSibling() {
        throw new Error('image cannot have children');
    }
}
exports.VNImage = VNImage;
//# sourceMappingURL=VNImage.js.map