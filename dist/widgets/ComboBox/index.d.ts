import { WidgetConfig } from '../config';
import { VNComboBox, ComboBoxProps } from './VNComboBox';
declare class ComboBoxConfig implements WidgetConfig<ComboBoxProps> {
    parentNode: any;
    createElement(): VNComboBox;
}
export default ComboBoxConfig;
