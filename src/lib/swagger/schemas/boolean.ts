import { faker } from '@faker-js/faker'

import { SchemaTypes } from '../enums'
import { SchemaObject } from '../types'

export function ParseBooleanSchema(schema: SchemaObject): boolean {
  if (schema.type !== SchemaTypes.BOOLEAN) {
    throw Error(`The type of schema is not a boolean.`)
  }

  if (Object.keys(schema).includes('example')) {
    const { example } = schema
    return Boolean(example)
  }

  return faker.datatype.boolean()
}
