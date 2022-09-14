import { SchemaTypes } from '../enums'
import { SchemaObject } from '../types'

import { ParseArraySchema } from './array'
import { ParseBooleanSchema } from './boolean'
import { ParseNumberSchema } from './number'
import { ParseStringSchema } from './string'

export const parsers = {
  [SchemaTypes.STRING]: (schema: SchemaObject) => ParseStringSchema(schema),
  [SchemaTypes.NUMBER]: (schema: SchemaObject) => ParseNumberSchema(schema),
  [SchemaTypes.BOOLEAN]: (schema: SchemaObject) => ParseBooleanSchema(schema),
  [SchemaTypes.ARRAY]: (schema: SchemaObject) => ParseArraySchema(schema),
  // [SchemaTypes.OBJECT]: (schema: SchemaObject) => ParseObjectSchema(schema),
}
