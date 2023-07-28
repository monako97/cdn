import { type BaseOption, type BasicConfig, type CustomElement } from '../basic-config';
export interface RadioOption extends Omit<BaseOption, 'icon'> {
    /** 值 */
    value?: string;
}
export interface RadioProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** input[type="radio"] 的 name 属性 */
    name?: string;
    /** 只读 */
    disabled?: boolean;
    /** 值 */
    value?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 选项数据 */
    options: (RadioOption | string)[];
    /** 自定义节点 'label'、'value'、'options' 的字段 */
    fieldNames?: BasicConfig['fieldName'];
    /** 值修改时的回调方法 */
    onChange?(val: string): void;
    /** 选项排列方式
     * @default 'horizontal'
     */
    layout?: 'vertical' | 'horizontal';
}
declare function Radio(props: RadioProps): import("solid-js").JSX.Element;
export type RadioElement = CustomElement<RadioProps>;
export default Radio;
