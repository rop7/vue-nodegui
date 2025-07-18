import { VNCheckbox, CheckboxProps } from './VNCheckbox';
import { WidgetConfig } from '../config';
declare class CheckboxConfig implements WidgetConfig<CheckboxProps> {
    parentNode: any;
    createElement(): VNCheckbox;
}
export default CheckboxConfig;
