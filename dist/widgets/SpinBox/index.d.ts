import { WidgetConfig } from '../config';
import { VNSpinBox, SpinBoxProps } from './VNSpinBox';
declare class SpinBoxConfig implements WidgetConfig<SpinBoxProps> {
    parentNode: any;
    createElement(): VNSpinBox;
}
export default SpinBoxConfig;
