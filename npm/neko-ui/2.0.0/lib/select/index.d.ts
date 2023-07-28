import { type JSXElement } from 'solid-js';
import { type DropdownMultipleProps, type DropdownProps } from '../dropdown';
import type { CustomElement, MenuOption } from '..';
declare function Select(props: SelectProps): import("solid-js").JSX.Element;
/** 通用API */
interface SelectBaseProps {
    /** 占位符 */
    placeholder?: string;
    /** 选项 */
    options?: (MenuOption | string | number)[];
    /** 标题 */
    label?: JSXElement | (() => JSXElement | (() => JSXElement));
    /** 前缀图标 */
    prefixIcon?: JSXElement | (() => JSXElement | (() => JSXElement));
    /** 后缀图标 */
    suffixIcon?: JSXElement | (() => JSXElement | (() => JSXElement));
}
/** 单选 */
export interface SelectProps extends Omit<DropdownProps, 'items' | 'children'>, SelectBaseProps {
    /** 值 */
    value?: string | number;
}
/** 多选 */
export interface SelectMultipleProps extends Omit<DropdownMultipleProps, 'items' | 'children'>, SelectBaseProps {
    /** 值
     * @default []
     */
    value?: (string | number)[];
}
export type SelectElement = CustomElement<SelectProps>;
export type SelectMultipleElement = CustomElement<SelectMultipleProps>;
export default Select;
