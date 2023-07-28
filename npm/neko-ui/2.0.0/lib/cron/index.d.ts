import { type JSX } from 'solid-js';
import type { CustomElement } from '../index';
export interface CronProps extends Omit<JSX.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    /** 隐藏域 */
    exclude?: string[];
    /** 显示表达式
     * @default true
     */
    showCron?: boolean;
    /** 标签页类型
     * @default 'line'
     */
    type?: 'line' | 'card';
    /** 值 */
    value?: string;
    /** 默认值
     * @default 0 0 0 * * ? *
     */
    defaultValue?: string;
    /** 值改变触发a */
    onChange?(val?: string): void;
}
export type CronElement = CustomElement<CronProps>;
export type SecondType = '*' | 'period' | 'beginInterval' | 'some';
export type MinuteType = SecondType;
export type HourType = SecondType;
export type DayType = SecondType | 'closeWorkDay' | '?' | 'last';
export type WeekType = SecondType | 'last' | '?';
export type MonthType = SecondType;
export type YearType = SecondType | '';
export type CronData<T extends string = string> = {
    start: number;
    end: number;
    begin: number;
    beginEvery: number;
    type: T;
    some: number[];
    value: string;
};
export type CronType = {
    activeKey: 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'year';
    second: CronData<SecondType>;
    minute: CronData<MinuteType>;
    hour: CronData<HourType>;
    day: CronData<DayType> & {
        last: number;
        closeWorkDay: number;
    };
    week: CronData<WeekType> & {
        last: number;
    };
    month: CronData<MonthType>;
    year: CronData<YearType>;
};
declare function Cron(props: CronProps): JSX.Element;
export default Cron;
