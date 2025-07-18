"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compilerOptions = void 0;
const compiler_core_1 = require("@vue/compiler-core");
const nativeWidget_1 = require("./widgets/nativeWidget");
const V_MODEL_TEXT = Symbol('vModelText');
const V_MODEL_SLIDER = Symbol('vModelSlider');
const V_MODEL_SPINBOX = Symbol('vModelSpinBox');
const V_MODEL_COMBOBOX = Symbol('vModelComboBox');
const V_MODEL_ARRAY = Symbol('vModelArray');
const V_MODEL_OBJECT = Symbol('vModelObject');
const V_MODEL_BOOLEAN = Symbol('vModelBoolean');
const V_MODEL_GENERIC = Symbol('vModelGeneric');
compiler_core_1.registerRuntimeHelpers({
    [V_MODEL_TEXT]: 'vModelText',
    [V_MODEL_SLIDER]: 'vModelSlider',
    [V_MODEL_SPINBOX]: 'vModelSpinBox',
    [V_MODEL_COMBOBOX]: 'vModelComboBox',
    [V_MODEL_ARRAY]: 'vModelArray',
    [V_MODEL_OBJECT]: 'vModelObject',
    [V_MODEL_BOOLEAN]: 'vModelBoolean',
    [V_MODEL_GENERIC]: 'vModelGeneric'
});
exports.compilerOptions = {
    isNativeTag: nativeWidget_1.isNativeWidget,
    directiveTransforms: {
        model: (dir, node, context) => {
            const baseResult = compiler_core_1.transformModel(dir, node, context);
            const { tag } = node;
            let directiveToUse;
            switch (tag) {
                case 'vn-line-edit':
                case 'QLineEdit':
                case 'QInput':
                case 'QText':
                // case 'QCheck':
                case 'vn-checkbox':
                    directiveToUse = V_MODEL_TEXT;
                    break;
                case 'vn-slider':
                case 'vn-dial':
                    directiveToUse = V_MODEL_SLIDER;
                    break;
                case 'vn-spinbox':
                    directiveToUse = V_MODEL_SPINBOX;
                    break;
                case 'vn-combobox':
                    directiveToUse = V_MODEL_COMBOBOX;
                    break;
                    // case 'QCheck':
                    // case 'vn-checkbox':
                    //   directiveToUse = V_MODEL_BOOLEAN;
                    break;
                case 'QList':
                    directiveToUse = V_MODEL_ARRAY;
                    break;
                case 'QData':
                case 'QFilter':
                case 'QToggle':
                    directiveToUse = V_MODEL_OBJECT;
                    break;
                default:
                    directiveToUse = V_MODEL_GENERIC;
                    break;
            }
            baseResult.needRuntime = context.helper(directiveToUse);
            return baseResult;
        },
    },
};
//# sourceMappingURL=vueLoader.js.map