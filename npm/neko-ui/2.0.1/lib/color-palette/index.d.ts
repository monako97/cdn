import { type JSX } from 'solid-js';
import '../dropdown';
import '../input';
import '../input-number';
import type { CustomElement } from '../index';
export interface ColorPaletteProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 颜色值 */
    value?: string;
    /** 默认值
     * @default '#5794ff'
     */
    defaultValue?: string;
    /** 变更时触发的方法 */
    onChange?: (color: string) => void;
}
export type ColorPaletteElement = CustomElement<ColorPaletteProps>;
declare function ColorPalette(_: ColorPaletteProps): JSX.Element;
export declare const defaultColorPaletteProps: {
    class: undefined;
    style: undefined;
    css: undefined;
    value: undefined;
    defaultValue: undefined;
    onChange: undefined;
};
export default ColorPalette;
