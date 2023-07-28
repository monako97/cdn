import { type BaseOption, type BasicConfig, type CustomElement } from '../basic-config';
export interface SegmentedProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** input[type="radio"] 的 name 属性 */
    name?: string;
    /** 只读 */
    disabled?: boolean;
    /** 值 */
    value?: string | number;
    /** 默认值 */
    defaultValue?: string | number;
    /** 选项数据 */
    options: (BaseOption | string | number)[];
    /** 自定义节点 'label'、'value'、'options' 的字段 */
    fieldNames?: BasicConfig['fieldName'];
    /** 值修改时的回调方法 */
    onChange?(val: string | number): void;
}
declare function Segmented(props: SegmentedProps): import("solid-js").JSX.Element;
export type SegmentedElement = CustomElement<SegmentedProps>;
export default Segmented;
