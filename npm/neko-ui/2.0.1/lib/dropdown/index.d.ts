import type { CustomElement, MenuMultipleProps, MenuProps, PopoverProps } from '..';
export interface BaseDropdownProps extends Omit<PopoverProps, 'content'> {
    /** 打开内容气泡 */
    open?: boolean | null;
}
export interface DropdownProps extends Omit<MenuProps, 'openKeys' | 'onOpenChange'>, BaseDropdownProps {
    /** 打开内容气泡 */
    open?: boolean | null;
}
export interface DropdownMultipleProps extends Omit<MenuMultipleProps, 'openKeys' | 'onOpenChange'>, BaseDropdownProps {
    /** 打开内容气泡 */
    open?: boolean | null;
}
export type DropdownElement = CustomElement<DropdownProps>;
export type DropdownMultipleElement = CustomElement<DropdownMultipleProps>;
declare function Dropdown(props: DropdownProps | DropdownMultipleProps): import("solid-js").JSX.Element;
export declare const defaultProps: {
    fieldNames: undefined;
    toggle: undefined;
    value: undefined;
    defaultValue: undefined;
    onChange: undefined;
    multiple: undefined;
    disabled: undefined;
    type: undefined;
    onOpenChange: undefined;
    openKeys: undefined;
    class: undefined;
    content: undefined;
    getPopupContainer: undefined;
    trigger: undefined;
    open: undefined;
    popupClass: undefined;
    popupCss: undefined;
    destroyInactive: boolean;
    arrow: undefined;
    placement: undefined;
    css: undefined;
    dropdownMatchSelectWidth: undefined;
};
export default Dropdown;
