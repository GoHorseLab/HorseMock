import { faker } from '@faker-js/faker'

import { ParseNumberSchema } from './number'

describe('[Function] ParseNumberSchema', () => {
  describe('Happy paths', () => {
    it.each([
      {
        type: 'number',
        example: faker.datatype.number(),
      },
      {
        type: 'number',
        example: Number(faker.commerce.price()),
      },
      {
        type: 'number',
        example: 12,
      },
      {
        type: 'number',
        example: null,
      },
    ])(
      'When informed an number schema with example, should return the prop value $example',
      (schema) => {
        const want = schema.example
        const expected = ParseNumberSchema(schema)
        expect(expected).toBe(want)
      }
    )

    it.each([
      {
        type: 'number',
      },
      {
        type: 'number',
      },
      {
        type: 'number',
      },
    ])(
      'When informed an number schema without example, should not return an undefined value',
      (schema) => {
        const expected = ParseNumberSchema(schema)
        expect(expected).not.toBeUndefined()
      }
    )

    it.each([
      {
        type: 'number',
      },
      {
        type: 'number',
      },
      {
        type: 'number',
      },
    ])(
      'When informed an number schema without example, should not return an null value',
      (schema) => {
        const expected = ParseNumberSchema(schema)
        expect(expected).not.toBeNull()
      }
    )
  })

  describe('Unhappy paths', () => {
    it.each([
      {
        type: 'object',
        example: {},
      },
      {
        type: 'array',
        example: [],
      },
      {
        type: 'string',
        example: 0,
      },
      {
        type: 'boolean',
        example: false,
      },
      {
        type: 'null',
        example: null,
      },
    ])(
      'When informed a non number schema type ($type), should throw an Error',
      (schema) => {
        try {
          // ! In the case of not failing the function, should fail the test (BEHAVIOR)
          const result = ParseNumberSchema(schema)
          expect(result).toBeUndefined()
        } catch (error) {
          expect(error).toBeInstanceOf(Error)
          expect(error.message).toBe('The type of schema is not a number.')
        }
      }
    )
  })
})
