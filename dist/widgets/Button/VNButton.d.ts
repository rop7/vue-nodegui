import { QPushButton, NodeWidget } from '@nodegui/nodegui';
import { AbstractButtonProps } from '../AbstractButton/VNAbstractButton';
import { VNWidget } from '../config';
import { PropSetters, Prop } from '../../renderer/patchProp';
/**
 * The button widget allows users to create and render native buttons in the app.
 * This widget is based on [NodeGui's QPushButton](https://docs.nodegui.org/docs/api/QPushButton)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-button @clicked="buttonClicked">
 *    Test button
 *  </vn-button>
 * </template>
 *
 * <script>
 *  export default {
 *    setup() {
 *      return {
 *        buttonClicked: () => console.log("the button was clicked")
 *      }
 *    }
 *  }
 * </script>
 * ```
 *
 * ## What does it look like?
 *
 * ![test](/img/vn-button.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-button` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface ButtonProps extends AbstractButtonProps {
    /**
     * Sets whether the button border is raised. [QPushButton: setFlat](https://docs.nodegui.org/docs/api/QPushButton#buttonsetflatisflat)
     */
    flat?: boolean;
}
export declare const buttonPropsSetters: PropSetters<VNButton, ButtonProps>;
/** @internal */
export declare class VNButton extends QPushButton implements VNWidget<ButtonProps> {
    insertChild(): void;
    patchProp(key: keyof ButtonProps, prevValue: Prop<ButtonProps, typeof key>, nextValue: Prop<ButtonProps, typeof key>): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
