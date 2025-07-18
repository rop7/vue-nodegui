import { ValidNativeWidgets } from './nativeWidget';
import { WidgetConfig } from './config';
declare const getConfigByType: (type: ValidNativeWidgets) => WidgetConfig<any>;
export default getConfigByType;
