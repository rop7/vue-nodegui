"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodegui_1 = require("@nodegui/nodegui");
const VNImage_1 = require("./VNImage");
class ImageConfig {
    createElement() {
        const widget = new VNImage_1.VNImage();
        widget.addEventListener(nodegui_1.WidgetEventTypes.Resize, () => {
            widget.scalePixmap(widget.size());
        });
        return widget;
    }
}
exports.default = ImageConfig;
//# sourceMappingURL=index.js.map