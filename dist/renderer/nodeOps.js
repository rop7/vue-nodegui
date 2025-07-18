"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const VNMetaWidget_1 = require("../widgets/MetaWidget/VNMetaWidget");
const widgetMap_1 = __importDefault(require("../widgets/widgetMap"));
const patchProp_1 = __importDefault(require("./patchProp"));
const nodeOps = {
    insert: (child, parent, anchor) => {
        // TODO: implement insertBefore in widgets
        if (anchor) {
            parent.insertBefore(child, anchor);
        }
        else {
            parent.insertChild(child);
        }
        child.setNodeParent(parent);
    },
    remove: (child) => {
        const { nodeParent } = child;
        if (nodeParent) {
            nodeParent.removeChild(child);
        }
    },
    createElement: (type) => {
        const config = widgetMap_1.default(type);
        return config.createElement();
    },
    createText: () => new VNMetaWidget_1.VNMetaWidget(),
    createComment: () => new VNMetaWidget_1.VNMetaWidget(),
    setText: (node, text) => {
        node.setText(text);
    },
    setElementText: (node, text) => {
        node.setText(text);
    },
    parentNode: (node) => {
        if (node) {
            return node.nodeParent;
        }
        return null;
    },
    nextSibling: (node) => {
        const nodeParent = node.nodeParent;
        return nodeParent.getNextSibling(node);
    },
    patchProp: patchProp_1.default,
};
exports.default = nodeOps;
//# sourceMappingURL=nodeOps.js.map