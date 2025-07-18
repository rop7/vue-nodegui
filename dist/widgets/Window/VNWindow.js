"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNWindow = void 0;
const nodegui_1 = require("@nodegui/nodegui");
/**
 * The main QMainWindow that contains the entire application.
 *
 * :::note
 * This widget can have only one child (the central widget)
 * :::
 *
 * Usage:
 *
 * You would not be using this widget in your app.
 * vue-nodegui automatically wraps you central widget into the vn-window widget
 * to allow you to open the app in your browser
 * @internal
 */
class VNWindow extends nodegui_1.QMainWindow {
    insertChild(child) {
        this.setCentralWidget(child);
    }
    patchProp() { }
    removeChild(child) {
        const removedChild = this.takeCentralWidget();
        if (removedChild) {
            removedChild.close();
        }
        child.close();
    }
    insertBefore(child) {
        if (!this.centralWidget) {
            this.insertChild(child);
        }
    }
    getNextSibling() {
        // window can only have a single central widget
        return null;
    }
}
exports.VNWindow = VNWindow;
//# sourceMappingURL=VNWindow.js.map