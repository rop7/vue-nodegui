import { QSpinBox, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { ViewProps } from '../View/VNView';
import { Prop } from '../../renderer/patchProp';
/**
 * The SpinBox component provides the ability to add and manipulate native spin box widgets.
 * It is based on [NodeGui's QSpinBox](https://docs.nodegui.org/docs/api/generated/classes/qspinbox/).
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-text>How many slices of cake ($2) would you like?</vn-text>
 *    <vn-spinbox v-model="spinBoxValue"/>
 *    <vn-text>Total cost: ${{spinBoxValue * 2}}</vn-text>
 *  </vn-view>
 * </template>
 *
 * <script>
 * import { ref } from 'vue';
 *
 * export default {
 *  setup() {
 *    const spinBoxValue = ref(0)
 *    return { spinBoxValue }
 *  }
 * }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![spinbox-demo](/img/vn-spinbox.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-spinbox` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface SpinBoxProps extends ViewProps {
    prefix?: string;
    suffix?: string;
    singleStep?: number;
    range?: Range;
    value?: number;
}
/** @internal */
export declare class VNSpinBox extends QSpinBox implements VNWidget<SpinBoxProps> {
    patchProp(key: keyof SpinBoxProps, prevValue: Prop<SpinBoxProps, typeof key>, nextValue: Prop<SpinBoxProps, typeof key>): void;
    insertChild(): void;
    getNextSibling(): NodeWidget<any> | null;
    insertBefore(): void;
    removeChild(): void;
}
declare type Range = {
    minimum: number;
    maximum: number;
};
export {};
