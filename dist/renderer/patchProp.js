"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchEvent = void 0;
exports.patchEvent = (eventType, widget, prevValue, nextValue) => {
    const camelCaseEvent = eventType[0].toLowerCase() + eventType.slice(1);
    if (prevValue !== nextValue) {
        widget.removeEventListener(camelCaseEvent, prevValue);
        widget.addEventListener(camelCaseEvent, nextValue);
    }
};
const patchProp = (el, key, prevValue, nextValue) => {
    const isEvent = key.startsWith('on');
    const isModelKey = key.startsWith('onUpdate:');
    // ignore model keys because they'll
    // be handled by vModel directive
    if (isEvent && !isModelKey) {
        exports.patchEvent(key.slice(2), el, prevValue, nextValue);
        return;
    }
    el.patchProp(key, prevValue, nextValue);
};
exports.default = patchProp;
//# sourceMappingURL=patchProp.js.map