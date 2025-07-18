import { WidgetConfig } from '../config';
import { VNProgressBar, ProgressBarProps } from './VNProgressBar';
declare class ProgressBarConfig implements WidgetConfig<ProgressBarProps> {
    parentNode: any;
    createElement(): VNProgressBar;
}
export default ProgressBarConfig;
