import { faker } from '@faker-js/faker'
import { SchemaTypes } from '../enums'

import { ParseArraySchema } from './array'

describe('[Function] ParseBooleanSchema', () => {
  describe('Happy paths', () => {
    it.each([
      {
        type: 'array',
        items: {
          type: 'string',
          example: faker.datatype.string(),
        },
      },
      {
        type: 'array',
        items: {
          type: 'number',
          example: faker.datatype.number(),
        },
      },
      {
        type: 'array',
        items: {
          type: 'boolean',
          example: faker.datatype.boolean(),
        },
      },
    ])(
      'When informed an array schema with items and nested examples, should return the prop value of nested example (typeof $items.type)',
      (schema) => {
        const want = [schema.items.example]
        const expected = ParseArraySchema(schema)
        expect(expected).toStrictEqual(want)
      }
    )

    it.each([
      {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'string',
            example: faker.datatype.string(),
          },
        },
      },
      {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'number',
            example: faker.datatype.number(),
          },
        },
      },
      {
        type: 'array',
        items: {
          type: 'array',
          items: {
            type: 'boolean',
            example: faker.datatype.boolean(),
          },
        },
      },
    ])(
      'When informed an array schema with items and nested arrays, should return the example of nested array',
      (schema) => {
        const want = [[schema.items.items.example]]
        const expected = ParseArraySchema(schema)
        expect(expected).toStrictEqual(want)
      }
    )
  })

  describe('Unhappy paths', () => {
    it('When informed an schema with different type than ARRAY, should throw an error', () => {
      try {
        // ! In the case of not failing the function, should fail the test (BEHAVIOR)
        const result = ParseArraySchema({
          type: SchemaTypes.OBJECT,
        })
        expect(result).toBeUndefined()
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe('The type of schema is not a array.')
      }
    })

    it('When informed an array schema incorrectly (without items as prop), should throw an error', () => {
      try {
        // ! In the case of not failing the function, should fail the test (BEHAVIOR)
        const result = ParseArraySchema({
          type: SchemaTypes.ARRAY,
        })
        expect(result).toBeUndefined()
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(
          'The type of schema is array, but items is not declared.'
        )
      }
    })

    it('When informed an array schema incorrectly (with a not mapped nested type), should throw an error', () => {
      try {
        // ! In the case of not failing the function, should fail the test (BEHAVIOR)
        const result = ParseArraySchema({
          type: SchemaTypes.ARRAY,
          items: {
            type: 'function',
          },
        })
        expect(result).toBeUndefined()
      } catch (error) {
        expect(error).toBeInstanceOf(Error)
        expect(error.message).toBe(
          'The type of nested schema items is not mapped.'
        )
      }
    })
  })
})
