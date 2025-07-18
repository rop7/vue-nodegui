import { VNRadioButton, RadioButtonProps } from './VNRadioButton';
import { WidgetConfig } from '../config';
declare class RadioButtonConfig implements WidgetConfig<RadioButtonProps> {
    parentNode: any;
    createElement(): VNRadioButton;
}
export default RadioButtonConfig;
