import { type ColorPaletteProps } from '../color-palette';
import type { BasicConfig, CustomElement, PopoverProps } from '../index';
/** 颜色选择器
 * @since 2.0.0
 */
export interface ColorPickerProps extends ColorPaletteProps, Omit<PopoverProps, 'children' | 'content'> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 关闭后是否销毁  */
    destroyInactive?: boolean;
    /** 尺寸
     * @default 'normal'
     */
    size?: BasicConfig['size'];
    /** 默认值  */
    defaultValue?: string;
}
export type ColorPickerElement = CustomElement<ColorPickerProps>;
declare function ColorPicker(props: ColorPickerProps): import("solid-js").JSX.Element;
export default ColorPicker;
