import type { JSXElement } from 'solid-js';
import type { CronData } from '.';
import type { BaseOption } from 'neko-ui';
type PeriodProps = {
    start: CronData['start'];
    end: CronData['end'];
    label: [JSXElement, JSXElement, JSXElement];
    options: (string | number | BaseOption)[];
    onChange(type: 'start' | 'end', value: number): void;
    validate(type: 'start' | 'end', v: number): boolean;
    disabled: boolean;
};
declare function Period(props: PeriodProps): import("solid-js").JSX.Element;
export default Period;
