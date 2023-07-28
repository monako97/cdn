import { type TreeData } from '../tree';
declare enum Type {
    string = "string",
    number = "number",
    integer = "integer",
    boolean = "boolean",
    object = "object",
    array = "array"
}
interface BaseSchema {
    type?: keyof typeof Type;
    name?: string;
    title?: string;
    items?: never;
    [key: string]: any;
}
interface ArraySchema extends Omit<BaseSchema, 'type' | 'items'> {
    type: 'array';
    items: Schema;
    properties?: Record<string, Schema>;
}
interface ObjectSchema extends Omit<BaseSchema, 'type'> {
    type?: Exclude<keyof typeof Type, 'array'>;
    properties?: Record<string, Schema>;
}
export type Schema = ObjectSchema | ArraySchema;
declare function fromSchema(schema: Schema, pid?: string): TreeData<string>[];
export default fromSchema;
