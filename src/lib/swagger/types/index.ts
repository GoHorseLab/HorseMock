import { SchemaTypes } from '../enums'

export type SchemaPrimitiveValue = string | number | boolean

export type SchemaValue =
  | SchemaPrimitiveValue
  | null
  | { [property: string]: SchemaValue }
  | SchemaValue[]

export type SchemaObject = {
  type: SchemaTypes | string
  example?: SchemaValue
  items?: SchemaObject
  $ref?: string
}

export type NullishSchemaValue<T = SchemaPrimitiveValue> = T | null
