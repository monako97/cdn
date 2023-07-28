import { type JSX } from 'solid-js';
import type { BasicConfig, CustomElement } from '../index';
export interface ButtonProps extends Omit<JSX.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'ref'> {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 按钮类型 */
    type?: 'success' | 'error' | 'primary' | 'warning' | 'default';
    /** 透明背景 */
    ghost?: boolean;
    /** 实色背景 */
    fill?: boolean;
    /** 圆形按钮 */
    circle?: boolean;
    /** 虚线按钮 */
    dashed?: boolean;
    /** 扁平按钮 */
    flat?: boolean;
    /** 禁用按钮 */
    disabled?: boolean;
    /** 块按钮 */
    block?: boolean;
    /** 链接按钮 */
    link?: boolean;
    /** 危险按钮 */
    danger?: boolean;
    /** 按钮尺寸
     * @default 'normal'
     */
    size?: BasicConfig['size'];
    /** 按钮前面添加一个图标 */
    icon?: (() => JSX.Element) | JSX.Element;
    /** 按键抬起 */
    onKeyUp?(e: KeyboardEvent): void;
}
export type ButtonElement = CustomElement<ButtonProps>;
declare function Button(_: ButtonProps): JSX.Element;
export default Button;
