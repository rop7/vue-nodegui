import { QSlider, NodeWidget, TickPosition, Orientation } from '@nodegui/nodegui';
import { VNWidget } from 'widgets/config';
import { PropSetters, Prop } from '../../renderer/patchProp';
import { ViewProps } from '../View/VNView';
/**
 * The slider widget allows users to render native sliders into their apps.
 * It is based on the [NodeGui's QSlider](https://docs.nodegui.org/docs/api/generated/classes/qslider)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-view>
 *    <vn-slider v-model="sliderValue" :maximum="100" :minimum="10" :orientation="1" />
 *    <vn-text>The slider value is: {{sliderValue}}</vn-text>
 *  </vn-view>
 * </template>
 *
 * <script>
 *  import { ref } from 'vue';
 *
 *  export default {
 *   setup() {
 *     const sliderValue = ref(0);
 *
 *     return {
 *       sliderValue
 *     }
 *   }
 *  };
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![vn-slider-demo](/img/vn-slider.gif)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-slider` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface SliderProps extends ViewProps {
    tickInterval?: number;
    tickPosition?: TickPosition;
    orientation?: Orientation;
    minimum?: number;
    maximum?: number;
    invertedAppearance?: boolean;
    invertedControls?: boolean;
    pageStep?: number;
    singleStep?: number;
    isSliderDown?: boolean;
    sliderPosition?: number;
    hasTracking?: boolean;
    value?: number;
}
export declare const sliderPropsSetters: PropSetters<VNSlider, SliderProps>;
/** @internal */
export declare class VNSlider extends QSlider implements VNWidget<SliderProps> {
    insertChild(): void;
    patchProp(key: keyof SliderProps, prevValue: Prop<SliderProps, typeof key>, nextValue: Prop<SliderProps, typeof key>): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
