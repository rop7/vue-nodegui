import { WidgetConfig } from '../config';
import { VNDial, DialProps } from './VNDial';
declare class DialConfig implements WidgetConfig<DialProps> {
    parentNode: any;
    createElement(): VNDial;
}
export default DialConfig;
