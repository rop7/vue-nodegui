import { QComboBox, NodeWidget, QSize, QVariant, SizeAdjustPolicy, InsertPolicy, QIcon } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { ViewProps } from '../View/VNView';
import { Prop } from '../../renderer/patchProp';
/**
 * The ComboBox component provides the ability to add and manipulate native combobox widgets.
 * It is based on [NodeGui's QComboBox](https://docs.nodegui.org/docs/api/generated/classes/qcombobox/).
 *
 * ## Usage
 *
 * ```html
 * <template>
 *   <vn-view>
 *     <vn-text>Choose a color</vn-text>
 *     <vn-combobox :items="data" v-model="index" />
 *     <vn-text>You have picked: {{data[index].text}}</vn-text>
 *   </vn-view>
 * </template>
 *
 * <script>
 *   import { ref } from 'vue';
 *
 *   export default {
 *     setup() {
 *       const index = ref(0);
 *       const data = [
 *         {text: "Red"},
 *         {text: "Yellow"},
 *         {text: "Blue"},
 *         {text: "Green"},
 *       ];
 *
 *       return {
 *         index,
 *         data,
 *       }
 *     }
 *   };
 * </script>
 *
 * ```
 *
 * ## What it looks like?
 *
 * ![combobox-demo](/img/vn-combobox.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-combobox` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface ComboBoxProps extends ViewProps {
    items?: ComboBoxItem[];
    count?: number;
    iconSize?: QSize;
    frame?: boolean;
    currentIndex?: number;
    currentData?: QVariant;
    currentText?: string;
    duplicatesEnabled?: boolean;
    editable?: boolean;
    insertPolicy?: InsertPolicy;
    maxCount?: number;
    maxVisibleItems?: number;
    minimumContentsLength?: number;
    modelColumn?: number;
    sizeAdjustPolicy?: SizeAdjustPolicy;
}
declare type ComboBoxItem = {
    text: string;
    icon?: QIcon;
    userData?: QVariant;
};
/** @internal */
export declare class VNComboBox extends QComboBox implements VNWidget<ComboBoxProps> {
    patchProp(key: keyof ComboBoxProps, prevValue: Prop<ComboBoxProps, typeof key>, nextValue: Prop<ComboBoxProps, typeof key>): void;
    insertChild(): void;
    getNextSibling(): NodeWidget<any> | null;
    insertBefore(): void;
    removeChild(): void;
}
export {};
