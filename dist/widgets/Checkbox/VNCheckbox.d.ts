import { QCheckBox, NodeWidget } from '@nodegui/nodegui';
import { AbstractButtonProps } from '../AbstractButton/VNAbstractButton';
import { VNWidget } from '../config';
import { PropSetters, Prop } from '../../renderer/patchProp';
/**
 * The checkbox widget allows users to create and render native checkboxes in the app.
 * This widget is based on [NodeGui's QCheckBox](https://docs.nodegui.org/docs/api/generated/classes/qcheckbox)
 *
 * ## Usage
 *
 * ```html
 * <template>
 *  <vn-checkbox @clicked="checkboxClicked">Check box label</vn-checkbox>
 * </template>
 *
 * <script>
 *  export default {
 *    setup() {
 *      return {
 *        checkboxClicked: (isChecked) => {
 *          console.log("The checkbox is ", isChecked ? "checked" : "not checked")
 *        }
 *      }
 *    }
 *  }
 * </script>
 * ```
 *
 * ## What it looks like?
 *
 * ![checkbox-demo](/img/vn-checkbox.png)
 *
 * ## Props and styling
 *
 * You can find all the props `vn-checkbox` accepts listed below.
 * Apart from this, you can take a look at the [styling](/docs/guides/3-styling)
 * and [event handling](/docs/guides/5-handle-events) docs
 */
export interface CheckboxProps extends AbstractButtonProps {
    /**
     * Sets whether the Checkbox border is raised. [QPushCheckbox: setFlat](https://docs.nodegui.org/docs/api/QPushCheckbox#Checkboxsetflatisflat)
     */
    value?: boolean;
}
export declare const CheckboxPropsSetters: PropSetters<VNCheckbox, CheckboxProps>;
/** @internal */
export declare class VNCheckbox extends QCheckBox implements VNWidget<CheckboxProps> {
    insertChild(): void;
    patchProp(key: keyof CheckboxProps, prevValue: Prop<CheckboxProps, typeof key>, nextValue: Prop<CheckboxProps, typeof key>): void;
    removeChild(): void;
    insertBefore(): void;
    getNextSibling(): NodeWidget<any> | null;
}
