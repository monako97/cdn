import { type JSXElement } from 'solid-js';
import { type BaseOption, type BasicConfig, type CustomElement } from '../basic-config';
declare function Menu(props: MenuProps | MenuMultipleProps): import("solid-js").JSX.Element;
export interface BaseMenuProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义样式表 */
    css?: string;
    /** 菜单展开的keys */
    openKeys?: (string | number)[];
    /** 菜单展开时触发的方法 */
    onOpenChange?: (keys: (string | number)[]) => void;
    /** 选项数据 */
    items: (string | MenuOption)[];
    /** 自定义节点 'label'、'value'、'options' 的字段 */
    fieldNames?: BasicConfig['fieldName'];
    /** 不可用状态 */
    disabled?: boolean;
    /** 可以取消 */
    toggle?: boolean;
}
export interface MenuProps extends BaseMenuProps {
    /** 值修改时的回调方法 */
    onChange?(val: string | number, item: MenuOption): void;
    /** 值 */
    value?: string | number;
    /** 默认值 */
    defaultValue?: string | number;
    /** 可多选
     * @default false
     */
    multiple?: false | never;
}
export interface MenuMultipleProps extends BaseMenuProps {
    /** 可多选
     * @default true
     */
    multiple: true;
    /** 值修改时的回调方法 */
    onChange?(val: (string | number)[], item: MenuOption): void;
    /** 值 */
    value?: (string | number)[];
    /** 默认值 */
    defaultValue?: (string | number)[];
}
/** 菜单选项 */
export interface MenuOption extends Omit<BaseOption, 'children' | 'options'> {
    /** 图标 */
    icon?: JSXElement;
    /** 内置类型(状态) */
    type?: 'primary' | 'success' | 'error' | 'warning';
    /** 自定义颜色 */
    color?: string;
    /** 子菜单 */
    children?: (string | MenuOption)[];
    /** 分组子选项 */
    options?: (string | MenuOption)[];
}
export type MenuElement = CustomElement<MenuProps>;
export type MenuMultipleElement = CustomElement<MenuMultipleProps>;
export default Menu;
