import { SchemaTypes } from '../enums'

export type SchemaValue =
  | string
  | number
  | boolean
  | null
  | { [property: string]: SchemaValue }
  | SchemaValue[]

export type SchemaObject = {
  type: SchemaTypes | string
  example?: SchemaValue
}

export type NullishSchemaValue<T> = T | null
