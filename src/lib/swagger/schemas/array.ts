import { SchemaTypes } from '../enums'
import { NullishSchemaValue, SchemaObject, SchemaValue } from '../types'

import { parsers } from './parser-map'

export function ParseArraySchema(schema: SchemaObject): Array<SchemaValue> {
  if (schema.type !== SchemaTypes.ARRAY) {
    throw Error(`The type of schema is not a array.`)
  }

  if (!schema?.items) {
    throw new Error(`The type of schema is array, but items is not declared.`)
  }

  const { items: itemSchema } = schema

  if (!Object.values(SchemaTypes).includes(itemSchema?.type as SchemaTypes)) {
    throw Error(`The type of nested schema items is not mapped.`)
  }

  const handler = parsers[itemSchema.type] as (
    schema: SchemaObject
  ) => SchemaValue | NullishSchemaValue<SchemaValue>

  const value = handler(itemSchema)

  return [value]
}
