import { faker } from '@faker-js/faker'

import { ParseStringSchema } from './string'

describe('[Function] ParseStringSchema', () => {
  describe('Happy paths', () => {
    it.each([
      {
        type: 'string',
        example: faker.datatype.string(),
      },
      {
        type: 'string',
        example: faker.internet.email(),
      },
      {
        type: 'string',
        example: faker.company.name(),
      },
      {
        type: 'string',
        example: null,
      },
    ])(
      'When informed an string schema with example, should return the prop value $example',
      (schema) => {
        const want = schema.example
        const expected = ParseStringSchema(schema)
        expect(expected).toBe(want)
      }
    )

    it.each([
      {
        type: 'string',
      },
      {
        type: 'string',
      },
      {
        type: 'string',
      },
    ])(
      'When informed an string schema without example, should not return an undefined value',
      (schema) => {
        const expected = ParseStringSchema(schema)
        expect(expected).not.toBeUndefined()
      }
    )

    it.each([
      {
        type: 'string',
      },
      {
        type: 'string',
      },
      {
        type: 'string',
      },
    ])(
      'When informed an string schema without example, should not return an null value',
      (schema) => {
        const expected = ParseStringSchema(schema)
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
        type: 'number',
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
      'When informed a non string schema type ($type), should throw an Error',
      (schema) => {
        try {
          // ! In the case of not failing the function, should fail the test (BEHAVIOR)
          const result = ParseStringSchema(schema)
          expect(result).toBeUndefined()
        } catch (error) {
          expect(error).toBeInstanceOf(Error)
          expect(error.message).toBe('The type of schema is not a string.')
        }
      }
    )
  })
})
