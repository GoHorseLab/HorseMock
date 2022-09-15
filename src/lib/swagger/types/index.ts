import { SchemaTypes } from '../enums'

export type SchemaPrimitiveValue = string | number | boolean

export type SchemaValue =
  | SchemaPrimitiveValue
  | null
  | { [property: string]: SchemaValue }
  | SchemaValue[]

export type SchemaObject = {
  type: SchemaTypes | string
  $ref?: string
  items?: SchemaObject
  properties?: Record<string, SchemaObject>
  example?: SchemaValue
}

export type NullishSchemaValue<T> = T | null
