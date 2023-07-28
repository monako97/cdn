import { type JSXElement } from 'solid-js';
import type { BaseOption, BasicConfig, CustomElement } from '..';
export interface TabsProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 只读 */
    disabled?: boolean;
    /** 值(指定值时为受控模式,配合onChange使用) */
    value?: string | number;
    /** 默认值 */
    defaultValue?: string | number;
    /** 选项数据 */
    items: (TabOption | string)[];
    /** 标签页居中 */
    centered?: boolean;
    /** 自定义节点 'label'、'value'、'options' 的字段 */
    fieldNames?: BasicConfig['fieldName'];
    /** 标签页的显示类型
     * @default 'line'
     */
    type?: 'line' | 'card';
    /** 值修改时的回调方法 */
    onChange?: (val: string) => void;
    /** 显示添加按钮 */
    add?: boolean;
    /** 删除和添加时的回调方法 */
    onEdit?: (type: 'add' | 'remove', item: TabOption, e: Event) => void;
    /** 给标签页左右添加的附加内容 */
    extra?: {
        left?: JSXElement | (() => JSXElement | (() => JSXElement));
        right?: JSXElement | (() => JSXElement | (() => JSXElement));
    };
}
export interface TabOption extends Omit<BaseOption, 'options'> {
    /** 内容 */
    content?: JSXElement | (() => JSXElement | (() => JSXElement));
    /** 标签可关闭 */
    closable?: boolean;
}
declare function Tabs(props: TabsProps): import("solid-js").JSX.Element;
export type TabsElement = CustomElement<TabsProps>;
export default Tabs;
