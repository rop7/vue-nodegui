"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const runtime_core_1 = require("@vue/runtime-core");
const nativeWidget_1 = require("../widgets/nativeWidget");
const VNWindow_1 = require("../widgets/Window/VNWindow");
const nodeOps_1 = __importDefault(require("./nodeOps"));
const renderer = runtime_core_1.createRenderer(nodeOps_1.default);
function injectNativeTagCheck(app) {
    // Inject `isNativeTag`
    // this is used for component name validation (dev only)
    Object.defineProperty(app.config, 'isNativeTag', {
        value: nativeWidget_1.isNativeWidget,
        writable: false,
    });
}
exports.createApp = (...args) => {
    const app = renderer.createApp(...args);
    injectNativeTagCheck(app);
    const { mount } = app;
    app.mount = () => {
        const container = new VNWindow_1.VNWindow();
        container.show();
        // Need the next line
        // to prevent the window
        // object from being GC'ed
        // @ts-ignore
        global.win = container;
        return mount(container);
    };
    return app;
};
//# sourceMappingURL=index.js.map