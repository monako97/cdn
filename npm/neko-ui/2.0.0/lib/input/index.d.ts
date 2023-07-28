import { type JSXElement } from 'solid-js';
import type { BasicConfig, CustomElement } from '../index';
export interface InputProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 前缀 */
    prefixIcon?: JSXElement;
    /** 后缀 */
    suffixIcon?: JSXElement;
    /** 禁用 */
    disabled?: boolean;
    /** 自动完成 */
    autoComplete?: string;
    /** 填充文本 */
    placeholder?: string;
    /** 组件尺寸
     * @default 'normal'
     */
    size?: BasicConfig['size'];
    /** 描述 */
    label?: JSXElement;
    /** 状态 */
    status?: 'error' | 'warning' | 'success';
    /** 类型
     * @default 'text'
     */
    type?: 'email' | 'hidden' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'url';
    /** HTML input accep */
    accept?: string;
    /** 值 */
    value?: string | number;
    /** 默认值 */
    defaultValue?: string | number;
    /** 值变更时触发的函数 */
    onChange?: (value: InputProps['value'], e: Event) => void;
    onKeyDown?(e: KeyboardEvent): void;
    onMouseDown?(e: MouseEvent): void;
    onBlur?(e: FocusEvent): void;
    onKeyUp?(e: KeyboardEvent): void;
    /** 指定输入框展示值的格式 */
    formatter?: (value?: InputProps['value']) => InputProps['value'];
    /** 搭配 formatter 使用, 将转换后的值转回原来的值 */
    parser?: (value?: InputProps['value']) => InputProps['value'];
}
declare function Input(props: InputProps): import("solid-js").JSX.Element;
export type InputElement = CustomElement<InputProps>;
export declare const defaultInportProps: {
    class: undefined;
    css: undefined;
    suffixIcon: undefined;
    prefixIcon: undefined;
    size: undefined;
    disabled: undefined;
    status: undefined;
    type: undefined;
    label: undefined;
    value: undefined;
    defaultValue: undefined;
    formatter: undefined;
    parser: undefined;
    onChange: undefined;
    onMouseDown: undefined;
    onKeyDown: undefined;
    accept: undefined;
    autoComplete: undefined;
    placeholder: string;
};
export default Input;
