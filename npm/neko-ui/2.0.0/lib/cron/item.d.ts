import type { CronType } from '.';
import type { RadioOption } from 'neko-ui';
export type CronItemProps<T extends CronType['activeKey'] = 'second'> = {
    state: CronType[T];
    onType(val: CronType[T]['type']): void;
    onChange?<V extends Exclude<keyof CronType[T], 'value' | 'type'>>(type: V, value: CronType[T][V]): void;
    options: RadioOption[];
};
declare function Item<T extends CronType['activeKey']>(props: CronItemProps<T>): import("solid-js").JSX.Element;
export default Item;
