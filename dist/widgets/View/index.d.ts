import { WidgetConfig } from 'widgets/config';
import { VNView, ViewProps } from './VNView';
declare class ViewConfig implements WidgetConfig<ViewProps> {
    parentNode: any;
    createElement(): VNView;
}
export default ViewConfig;
