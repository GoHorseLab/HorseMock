import { faker } from '@faker-js/faker'

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
})
