import { faker } from '@faker-js/faker'

import { SchemaTypes } from '../enums'
import { SchemaObject, NullishSchemaValue } from '../types'

export function ParseStringSchema(
  schema: SchemaObject
): NullishSchemaValue<string> {
  if (schema.type !== SchemaTypes.STRING) {
    throw Error(`The type of schema is not a string.`)
  }

  if (Object.keys(schema).includes('example')) {
    const { example } = schema
    return example === null ? null : String(example)
  }

  return faker.datatype.string()
}
