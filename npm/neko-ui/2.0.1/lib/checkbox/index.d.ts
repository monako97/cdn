import { type BaseOption, type BasicConfig, type CustomElement } from '../basic-config';
/** 通用API
 * @since 1.0.0
 */
export interface CheckboxBaseProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** input[type="checkbox"] 的 name 属性 */
    name?: string;
    /** 只读 */
    disabled?: boolean;
    /** 选项排列方式
     * @default 'horizontal'
     */
    layout?: 'vertical' | 'horizontal';
    /** 自定义节点 'label'、'value'、'options' 的字段 */
    fieldNames?: BasicConfig['fieldName'];
}
/** 复选框API */
export interface CheckboxBoolProps extends CheckboxBaseProps {
    /** 一个 bool 值; */
    value?: boolean;
    /** 默认值 */
    defaultValue?: boolean;
    /** 值修改时的回调方法 */
    onChange?: (val: boolean) => void;
    checkAll?: never;
    options?: never;
}
/** 通过数据渲染一组复选框按钮的API */
export interface CheckboxGroupProps extends CheckboxBaseProps {
    /** 全选 */
    checkAll?: boolean;
    /** 值;
     * 当设置了value时, 将是受控模式;
     * 受控模式可通过 onChange 事件更新 value
     **/
    value?: (string | number)[];
    /** 默认值 */
    defaultValue?: (string | number)[];
    /** 渲染选项所使用的数据,
     * 当没有设置该值时, 将渲染一个切换 bool 值的按钮
     * */
    options?: (CheckboxOption | string)[];
    /** 值修改时的回调方法 */
    onChange?: (val: (string | number)[]) => void;
}
/** 复选框选项
 * @since 1.0.0
 */
export interface CheckboxOption extends BaseOption {
    /** 不确定状态 */
    indeterminate?: boolean;
}
declare function Checkbox(props: CheckboxBoolProps | CheckboxGroupProps): import("solid-js").JSX.Element;
export type CheckboxGroupElement = CustomElement<CheckboxGroupProps>;
export type CheckboxBoolElement = CustomElement<CheckboxBoolProps>;
export default Checkbox;
