import { VNButton, ButtonProps } from './VNButton';
import { WidgetConfig } from '../config';
declare class ButtonConfig implements WidgetConfig<ButtonProps> {
    parentNode: any;
    createElement(): VNButton;
}
export default ButtonConfig;
