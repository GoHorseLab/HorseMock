import { faker } from '@faker-js/faker'
import { ParseBooleanSchema } from './boolean'

describe('[Function] ParseBooleanSchema', () => {
  describe('Happy paths', () => {
    it.each([
      {
        type: 'boolean',
        example: faker.datatype.boolean(),
      },
      {
        type: 'boolean',
        example: faker.datatype.boolean(),
      },
      {
        type: 'boolean',
        example: faker.datatype.boolean(),
      },
      {
        type: 'boolean',
        example: faker.datatype.boolean(),
      },
      {
        type: 'boolean',
        example: true,
      },
      {
        type: 'boolean',
        example: false,
      },
    ])(
      'When informed an boolean schema with example, should return the prop value $example',
      (schema) => {
        const want = schema.example
        const expected = ParseBooleanSchema(schema)
        expect(expected).toBe(want)
      }
    )

    it.each([
      {
        type: 'boolean',
      },
      {
        type: 'boolean',
      },
      {
        type: 'boolean',
      },
    ])(
      'When informed an boolean schema without example, should not return an undefined value',
      (schema) => {
        const expected = ParseBooleanSchema(schema)
        expect(expected).not.toBeUndefined()
      }
    )

    it.each([
      {
        type: 'boolean',
      },
      {
        type: 'boolean',
      },
      {
        type: 'boolean',
      },
    ])(
      'When informed an boolean schema without example, should not return an null value',
      (schema) => {
        const expected = ParseBooleanSchema(schema)
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
        example: 'test',
      },
      {
        type: 'number',
        example: 11,
      },
      {
        type: 'null',
        example: null,
      },
    ])(
      'When informed a non boolean schema type ($type), should throw an Error',
      (schema) => {
        try {
          // ! In the case of not failing the function, should fail the test (BEHAVIOR)
          const result = ParseBooleanSchema(schema)
          expect(result).toBeUndefined()
        } catch (error) {
          expect(error).toBeInstanceOf(Error)
          expect(error.message).toBe('The type of schema is not a boolean.')
        }
      }
    )
  })
})
