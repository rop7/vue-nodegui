"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNComboBox = void 0;
const nodegui_1 = require("@nodegui/nodegui");
const VNView_1 = require("../View/VNView");
const comboBoxPropsSetters = Object.assign(Object.assign({}, VNView_1.viewPropsSetters), { items(widget, _, items) {
        widget.clear();
        items.forEach((item) => {
            widget.addItem(item.icon, item.text, item.userData);
        });
    },
    count(widget, _, count) {
        widget.setProperty('count', count);
    },
    iconSize(widget, _, iconSize) {
        widget.setProperty('iconSize', iconSize.native);
    },
    frame(widget, _, frame) {
        widget.setProperty('frame', frame);
    },
    currentIndex(widget, _, currentIndex) {
        widget.setCurrentIndex(currentIndex);
    },
    currentData(widget, _, currentData) {
        widget.setProperty('currentData', currentData.native);
    },
    currentText(widget, _, currentText) {
        widget.setCurrentText(currentText);
    },
    editable(widget, _, editable) {
        widget.setEditable(editable);
    },
    duplicatesEnabled(widget, _, duplicatesEnabled) {
        widget.setProperty('duplicatesEnabled', duplicatesEnabled);
    },
    insertPolicy(widget, _, insertPolicy) {
        widget.setProperty('insertPolicy', insertPolicy);
    },
    maxCount(widget, _, maxCount) {
        widget.setProperty('maxCount', maxCount);
    },
    maxVisibleItems(widget, _, maxVisibleItems) {
        widget.setMaxVisibleItems(maxVisibleItems);
    },
    minimumContentsLength(widget, _, minimumContentsLength) {
        widget.setProperty('minimumContentsLength', minimumContentsLength);
    },
    modelColumn(widget, _, modelColumn) {
        widget.setProperty('modelColumn', modelColumn);
    },
    sizeAdjustPolicy(widget, _, sizeAdjustPolicy) {
        widget.setSizeAdjustPolicy(sizeAdjustPolicy);
    } });
/** @internal */
class VNComboBox extends nodegui_1.QComboBox {
    patchProp(key, prevValue, nextValue) {
        const propSetter = comboBoxPropsSetters[key];
        if (propSetter !== undefined) {
            propSetter(this, prevValue, nextValue);
        }
    }
    insertChild() {
        throw new Error('Cannot add child to ComboBox elements');
    }
    getNextSibling() {
        throw new Error('ComboBox elements cannot have children');
    }
    insertBefore() {
        throw new Error('Cannot add child to ComboBox elements');
    }
    removeChild() {
        throw new Error('Cannot remove/add child to ComboBox elements');
    }
}
exports.VNComboBox = VNComboBox;
//# sourceMappingURL=VNComboBox.js.map