import { type InputProps } from '../input';
import type { CustomElement } from '..';
/** API
 * @since 2.0.0
 */
export interface InputNumberProps extends Omit<InputProps, 'value' | 'defaultValue' | 'onChange'> {
    /** 值 */
    value?: number;
    /** 默认值
     * @default 0
     */
    defaultValue?: number;
    /** 最小值
     * @default Number.MIN_SAFE_INTEGER
     */
    min?: number;
    /** 最大值
     * @default Number.MAX_SAFE_INTEGER
     */
    max?: number;
    /** 值变更时触发的函数 */
    onChange?: (value?: number) => void;
    /** 每次改变步数，可以为小数
     * @default 1
     */
    step?: number;
    /** 数值精度
     * @default 2
     */
    precision?: number;
}
export type InputNumberElement = CustomElement<InputNumberProps>;
declare function InputNumber(props: InputNumberProps): import("solid-js").JSX.Element;
export default InputNumber;
