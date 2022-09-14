import { IJsonSchema } from 'openapi-types'
import { faker } from '@faker-js/faker'

import { SchemaTypes } from '../../enums'

export function ParseStringSchema(schema: IJsonSchema): string {
  if (schema.type !== SchemaTypes.STRING) {
    throw Error(`The type of schema is not a string.`)
  }

  const hasExample = Object.keys(schema).includes('example')

  const value = hasExample ? String(schema['example']) : faker.datatype.string()

  return value
}
