import { faker } from '@faker-js/faker'

import { SchemaTypes } from '../enums'
import { SchemaObject, NullishSchemaValue } from '../types'

export function ParseNumberSchema(
  schema: SchemaObject
): NullishSchemaValue<number> {
  if (schema.type !== SchemaTypes.NUMBER) {
    throw Error(`The type of schema is not a number.`)
  }

  if (Object.keys(schema).includes('example')) {
    const { example } = schema
    return example === null ? null : Number(example)
  }

  return faker.datatype.number()
}
