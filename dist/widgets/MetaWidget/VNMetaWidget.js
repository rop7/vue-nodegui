"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNMetaWidget = void 0;
const nodegui_1 = require("@nodegui/nodegui");
/** @internal */
class VNMetaWidget extends nodegui_1.QWidget {
    constructor() {
        super();
        this.setFixedSize(0, 0);
    }
    insertChild() {
        throw new Error('cannot add child to meta widgets');
    }
    patchProp() {
        throw new Error('cannot add props to meta widgets');
    }
    removeChild() {
        throw new Error('cannot add props to meta widgets');
    }
    insertBefore() {
        throw new Error('Cannot add child to meta widgets');
    }
    getNextSibling() {
        throw new Error('meta widget cannot have children');
    }
}
exports.VNMetaWidget = VNMetaWidget;
//# sourceMappingURL=VNMetaWidget.js.map