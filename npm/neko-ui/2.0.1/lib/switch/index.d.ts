import type { CustomElement } from '..';
export interface SwitchProps {
    /** 自定义类名 */
    class?: string;
    /** 自定义类名 */
    css?: string;
    /** 值 */
    checked?: boolean;
    /** 只读 */
    disabled?: boolean;
    /** 设置 为 true 时的文案 */
    checkedText?: string;
    /** 设置 为 false 时的文案 */
    unCheckedText?: string;
    /** 加载状态 */
    loading?: boolean;
    /** 值修改时的回调方法 */
    onChange?: (val: boolean) => void;
}
export type SwitchElement = CustomElement<SwitchProps>;
declare function Switch(props: SwitchProps): import("solid-js").JSX.Element;
export default Switch;
