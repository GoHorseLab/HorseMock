import { SchemaTypes } from '../enums'
import { NullishSchemaValue, SchemaObject, SchemaValue } from '../types'

import { parsers } from './parser-map'

export function ParseObjectSchema(schema: SchemaObject): SchemaValue {
  if (schema.type !== SchemaTypes.OBJECT) {
    throw Error(`The type of schema is not a object.`)
  }

  if (!schema?.properties) {
    throw new Error(
      `The type of schema is a object, but properties prop is not setted.`
    )
  }

  const { properties } = schema
  const arrProperties = Object.entries(properties)

  const object = {} as SchemaValue

  for (const [property, nestedSchema] of arrProperties) {
    if (
      !Object.values(SchemaTypes).includes(nestedSchema?.type as SchemaTypes)
    ) {
      throw Error(
        `The property ${property} has a invalid type, that is not mapped.`
      )
    }

    if (Object.keys(nestedSchema).includes('example')) {
      const { example } = nestedSchema

      if (example === null) {
        object[property] = null
        continue
      }

      if (nestedSchema.type === SchemaTypes.NUMBER && !isNaN(Number(example))) {
        object[property] = Number(example)
        continue
      }

      object[property] = example
      continue
    }

    const handler = parsers[nestedSchema.type] as (
      schema: SchemaObject
    ) => SchemaValue | NullishSchemaValue<SchemaValue>

    const value = handler(nestedSchema)

    object[property] = value
  }

  return object
}
