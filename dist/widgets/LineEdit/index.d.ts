import { WidgetConfig } from 'widgets/config';
import { VNLineEdit, LineEditProps } from './VNLineEdit';
declare class LineEditConfig implements WidgetConfig<LineEditProps> {
    parentNode: any;
    createElement(): VNLineEdit;
}
export default LineEditConfig;
