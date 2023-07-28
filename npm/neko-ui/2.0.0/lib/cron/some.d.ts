import type { JSXElement } from 'solid-js';
import type { CronData } from '.';
import type { BaseOption } from 'neko-ui';
type SomeProps = {
    value: CronData['some'];
    label: JSXElement;
    options: (string | number | BaseOption)[];
    type: CronData['type'];
    onChange(type: 'some', value: number[]): void;
};
declare function Some(props: SomeProps): import("solid-js").JSX.Element;
export default Some;
