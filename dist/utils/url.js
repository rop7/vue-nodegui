"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidUrl = void 0;
function isValidUrl(str) {
    try {
        // eslint-disable-next-line no-new
        new URL(str);
        return true;
    }
    catch (_) {
        return false;
    }
}
exports.isValidUrl = isValidUrl;
//# sourceMappingURL=url.js.map