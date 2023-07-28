import type { JSXElement } from 'solid-js';
import type { CronData } from '.';
import type { BaseOption } from 'neko-ui';
type BeginIntervalProps = {
    begin: CronData['begin'];
    beginEvery: CronData['beginEvery'];
    label: [JSXElement, JSXElement, JSXElement];
    beginOption: (string | number | BaseOption)[];
    beginEveryOption: (string | number | BaseOption)[];
    onChange(type: 'begin' | 'beginEvery', value: number): void;
    validate(type: 'begin' | 'beginEvery', value: number): boolean;
    disabled: boolean;
};
declare function BeginInterval(props: BeginIntervalProps): import("solid-js").JSX.Element;
export default BeginInterval;
