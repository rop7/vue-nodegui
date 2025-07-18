"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoadedQMovie = exports.getLoadedPixmap = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const phin_1 = __importDefault(require("phin"));
const url_1 = require("./url");
function getLoadedPixmap(imageUrlOrPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const pixMap = new nodegui_1.QPixmap();
        if (url_1.isValidUrl(imageUrlOrPath)) {
            const res = yield phin_1.default(imageUrlOrPath);
            const imageBuffer = Buffer.from(res.body);
            pixMap.loadFromData(imageBuffer);
        }
        else {
            pixMap.load(imageUrlOrPath);
        }
        return pixMap;
    });
}
exports.getLoadedPixmap = getLoadedPixmap;
function getLoadedQMovie(imageUrlOrPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const movie = new nodegui_1.QMovie();
        if (url_1.isValidUrl(imageUrlOrPath)) {
            const res = yield phin_1.default(imageUrlOrPath);
            const imageBuffer = Buffer.from(res.body);
            movie.loadFromData(imageBuffer);
        }
        else {
            movie.setFileName(imageUrlOrPath);
        }
        return movie;
    });
}
exports.getLoadedQMovie = getLoadedQMovie;
//# sourceMappingURL=image.js.map