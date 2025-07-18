"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("./Button"));
const View_1 = __importDefault(require("./View"));
const Text_1 = __importDefault(require("./Text"));
const LineEdit_1 = __importDefault(require("./LineEdit"));
const Image_1 = __importDefault(require("./Image"));
const Checkbox_1 = __importDefault(require("./Checkbox"));
const RadioButton_1 = __importDefault(require("./RadioButton"));
const ScrollArea_1 = __importDefault(require("./ScrollArea"));
const Slider_1 = __importDefault(require("./Slider"));
const SpinBox_1 = __importDefault(require("./SpinBox"));
const ProgressBar_1 = __importDefault(require("./ProgressBar"));
const ComboBox_1 = __importDefault(require("./ComboBox"));
const Dial_1 = __importDefault(require("./Dial"));
const AnimatedImage_1 = __importDefault(require("./AnimatedImage"));
const widgetMap = {
    'vn-button': new Button_1.default(),
    'vn-line-edit': new LineEdit_1.default(),
    'vn-image': new Image_1.default(),
    'vn-text': new Text_1.default(),
    'vn-view': new View_1.default(),
    'vn-checkbox': new Checkbox_1.default(),
    'vn-radio-button': new RadioButton_1.default(),
    'vn-scroll-area': new ScrollArea_1.default(),
    'vn-slider': new Slider_1.default(),
    'vn-spinbox': new SpinBox_1.default(),
    'vn-progress-bar': new ProgressBar_1.default(),
    'vn-combobox': new ComboBox_1.default(),
    'vn-dial': new Dial_1.default(),
    'vn-animated-image': new AnimatedImage_1.default(),
};
const getConfigByType = (type) => {
    if (widgetMap[type] === undefined) {
        throw new Error(`invalid widget type ${type}`);
    }
    return widgetMap[type];
};
exports.default = getConfigByType;
//# sourceMappingURL=widgetMap.js.map