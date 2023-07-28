import { type BaseOption, type BasicConfig } from '..';
declare function getOptions<T extends BaseOption = BaseOption>(list?: (T | string | number)[], fieldNames?: BasicConfig['fieldName']): (T & Record<string, unknown>)[];
export default getOptions;
