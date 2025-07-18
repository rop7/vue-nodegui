import { QProgressBar, Orientation, NodeWidget } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { ViewProps } from '../View/VNView';
import { Prop } from '../../renderer/patchProp';
/**
 * The ProgressBar component provides ability to add and manipulate native progress bar widgets.
 * It is based on [NodeGui's QProgressBar](https://docs.nodegui.org/docs/api/generated/classes/qprogressbar/).
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-progress-bar :value="progressBarValue" />
 *    <vn-button v-on:clicked="inc" >Increase the above bar's progress</vn-button>
 *  </vn-view>
 * </template>
 *
 * <script>
 * import { ref } from 'vue';
 *
 * export default {
 *   setup () {
 *     const progressBarValue = ref(0)
 *     const inc = () => {
 *       progressBarValue.value += 25;
 *     }
 *     return {
 *       progressBarValue,
 *       inc,
 *     }
 *   }
 * }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![progress-bar-demo](/img/vn-progress-bar.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-progress-bar` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface ProgressBarProps extends ViewProps {
    value?: number;
    minimum?: number;
    maximum?: number;
    orientation?: Orientation;
}
/** @internal */
export declare class VNProgressBar extends QProgressBar implements VNWidget<ProgressBarProps> {
    patchProp(key: keyof ProgressBarProps, prevValue: Prop<ProgressBarProps, typeof key>, nextValue: Prop<ProgressBarProps, typeof key>): void;
    insertChild(): void;
    getNextSibling(): NodeWidget<any> | null;
    insertBefore(): void;
    removeChild(): void;
}
