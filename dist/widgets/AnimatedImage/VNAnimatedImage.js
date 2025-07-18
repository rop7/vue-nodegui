"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNAnimatedImage = exports.animatedImagePropsSetters = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const image_1 = require("../../utils/image");
const VNText_1 = require("../Text/VNText");
exports.animatedImagePropsSetters = Object.assign(Object.assign({}, VNText_1.textPropsSetters), { src: (widget, _, nextValue) => {
        if (!nextValue) {
            return;
        }
        image_1.getLoadedQMovie(nextValue)
            .then((movie) => {
            var _a;
            widget.setMovie(movie);
            (_a = widget.movie()) === null || _a === void 0 ? void 0 : _a.start();
        })
            .catch(console.warn);
    }, buffer: (widget, _, nextValue) => {
        var _a;
        const movie = new nodegui_1.QMovie();
        movie.loadFromData(nextValue);
        widget.setMovie(movie);
        (_a = widget.movie()) === null || _a === void 0 ? void 0 : _a.start();
    } });
/** @internal */
class VNAnimatedImage extends nodegui_1.QLabel {
    insertChild() {
        throw new Error('Cannot add child to animated image elements');
    }
    patchProp(key, prevValue, nextValue) {
        const propSetter = exports.animatedImagePropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    removeChild() {
        throw new Error('Cannot remove/add child to animated image elements');
    }
    insertBefore() {
        throw new Error('Cannot add child to animated image elements');
    }
    getNextSibling() {
        throw new Error('animated image cannot have children');
    }
}
exports.VNAnimatedImage = VNAnimatedImage;
//# sourceMappingURL=VNAnimatedImage.js.map