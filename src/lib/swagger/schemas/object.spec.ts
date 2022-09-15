import { ParseObjectSchema } from './object'

describe('[Function] ParseObjectSchema', () => {
  describe('Happy paths', () => {
    it.each([
      {
        schema: {
          type: 'object',
          properties: {
            meta: {
              type: 'object',
              properties: {
                count: {
                  type: 'number',
                  example: 1,
                },
                page: {
                  type: 'number',
                  example: 1,
                },
                pageSize: {
                  type: 'number',
                  example: 10,
                },
                cursor: {
                  type: 'string',
                  example: 'ab2dbfde-ba21-43d6-8459-f5fda4cb9a9a',
                },
              },
            },
            items: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: {
                    type: 'string',
                    example: '1794b463-1a57-4920-80c3-c9c7f16a4f65',
                  },
                  name: {
                    type: 'string',
                    example: 'John Doe',
                  },
                  createdAt: {
                    type: 'string',
                    example: '2021-11-10T16:16:16.185Z',
                  },
                  updatedAt: {
                    type: 'string',
                    example: '2021-11-10T16:16:16.185Z',
                  },
                },
              },
            },
          },
        },
        want: {
          meta: {
            count: 1,
            page: 1,
            pageSize: 10,
            cursor: 'ab2dbfde-ba21-43d6-8459-f5fda4cb9a9a',
          },
          items: [
            {
              id: '1794b463-1a57-4920-80c3-c9c7f16a4f65',
              name: 'John Doe',
              createdAt: '2021-11-10T16:16:16.185Z',
              updatedAt: '2021-11-10T16:16:16.185Z',
            },
          ],
        },
      },
      {
        schema: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              example: 'deb1ec8d-5cc6-4121-9b2e-17b10e0eb6a5',
            },
            offer: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  example: '14de52ed-77af-4854-8df2-75eedc557f6e',
                },
                establishmentId: {
                  type: 'string',
                  example: '6e344095-70be-4e18-852e-84e80ca4e9dc',
                },
                name: {
                  type: 'string',
                  example: 'Salada tropical',
                },
                currency: {
                  type: 'string',
                  example: 'BRL',
                  enum: ['BRL'],
                },
                description: {
                  type: 'string',
                  example:
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                },
                prices: {
                  type: 'object',
                  properties: {
                    total: {
                      type: 'number',
                      example: 22.5,
                    },
                    sale: {
                      type: 'number',
                      example: 11.25,
                    },
                    economy: {
                      type: 'number',
                      example: 11.25,
                    },
                  },
                },
                discountInPercentage: {
                  type: 'number',
                  example: 50,
                },
                startAt: {
                  type: 'string',
                  example: '2022-02-18T08:00:00.000Z',
                },
                endAt: {
                  type: 'string',
                  example: '2022-02-18T18:00:00.000Z',
                },
                maxConsumeDate: {
                  type: 'string',
                  example: '2022-08-31T23:59:59.000Z',
                },
                status: {
                  type: 'string',
                  enum: ['PENDING', 'ACTIVE', 'STOCK_OUT', 'EXPIRED'],
                  example: 'ACTIVE',
                },
                stock: {
                  type: 'number',
                  example: 100,
                },
                photos: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        example: '04993242-7e96-4a11-8293-8c95be412b35',
                      },
                      file: {
                        type: 'object',
                        properties: {
                          id: {
                            type: 'string',
                            example: 'ff6d2b69-bf76-4b94-9f5b-77c9b6e9e3d8',
                          },
                          url: {
                            type: 'string',
                            example: 'https://cdn/categories/brasileira.jpg',
                          },
                          type: {
                            type: 'string',
                            example: 'PHOTO',
                            enum: ['PHOTO', 'DOCUMENT'],
                          },
                          refId: {
                            type: 'string',
                            example: '3665dcca-e08a-4fc4-bfc8-d81146860326',
                          },
                          refType: {
                            type: 'string',
                            example: 'CATEGORY_PHOTO',
                            enum: [
                              'ESTABLISHMENT_DOCUMENT',
                              'ESTABLISHMENT_PHOTO',
                              'PERSON_DOCUMENT',
                              'PERSON_PHOTO',
                              'CATEGORY_PHOTO',
                              'OFFER_PHOTO',
                            ],
                          },
                          createdAt: {
                            format: 'date-time',
                            type: 'string',
                            example: '2021-11-10T16:16:16.185Z',
                          },
                          updatedAt: {
                            format: 'date-time',
                            type: 'string',
                            example: '2021-11-10T16:16:16.185Z',
                          },
                        },
                      },
                      default: {
                        type: 'boolean',
                        example: true,
                      },
                      createdAt: {
                        type: 'string',
                        example: '2022-02-19T00:10:02.738Z',
                      },
                      updatedAt: {
                        type: 'string',
                        example: '2022-02-19T00:10:02.738Z',
                      },
                    },
                  },
                },
                createdAt: {
                  type: 'string',
                  example: '2022-02-18T08:00:01.352Z',
                },
                updatedAt: {
                  type: 'string',
                  example: '2022-02-18T08:00:01.352Z',
                },
              },
            },
            customer: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  example: '5f1ac321-96b0-4e0b-9ff2-d3b36918c510',
                },
                refId: {
                  type: 'string',
                  example: 'customer-123-firebaseid',
                },
                email: {
                  type: 'string',
                  example: 'johndoe@hotmail.com',
                },
                name: {
                  type: 'string',
                  example: 'John Doe',
                },
                documentNumber: {
                  type: 'string',
                  example: '42504582021',
                },
                phone: {
                  type: 'string',
                  example: '96993566486',
                },
                deleted: {
                  type: 'boolean',
                  example: false,
                },
                hasUserAccount: {
                  type: 'boolean',
                  example: true,
                },
                createdAt: {
                  type: 'string',
                  example: '2022-02-20T20:02:57.102Z',
                  format: 'date-time',
                },
                updatedAt: {
                  type: 'string',
                  example: '2022-02-20T20:02:57.102Z',
                  format: 'date-time',
                },
              },
            },
            transaction: {
              type: 'object',
              properties: {
                id: {
                  type: 'string',
                  example: 'deb1ec8d-5cc6-4121-9b2e-17b10e0eb6a5',
                },
                method: {
                  type: 'string',
                  enum: ['CREDIT_CARD'],
                  example: 'CREDIT_CARD',
                },
                status: {
                  type: 'string',
                  enum: [
                    'NEW',
                    'PROCESSING',
                    'DECLINED',
                    'APPROVED',
                    'REFUNDED',
                  ],
                  example: 'APPROVED',
                },
                amount: {
                  type: 'number',
                  example: 100,
                },
                currency: {
                  type: 'string',
                  enum: ['BRL'],
                  example: 'BRL',
                },
                approved: {
                  type: 'object',
                  properties: {
                    at: {
                      type: 'string',
                      example: '2022-02-23T23:54:05.145Z',
                      format: 'date-time',
                    },
                  },
                },
                refunded: {
                  type: 'object',
                  example: null,
                },
                declined: {
                  type: 'object',
                  example: null,
                },
                fees: {
                  type: 'array',
                  items: {
                    type: 'object',
                    properties: {
                      id: {
                        type: 'string',
                        example: '65d16861-4ff0-4cee-a98d-7188f7133dfe',
                      },
                      transactionId: {
                        type: 'string',
                        example: '4aa17bdf-babc-453a-9c95-4d80f4e9c411',
                      },
                      type: {
                        type: 'string',
                        example: 'PAYMENT_GATEWAY_PROVIDER',
                        enum: ['PAYMENT_GATEWAY_PROVIDER'],
                      },
                      amount: {
                        type: 'number',
                        example: 3.9,
                      },
                      commission: {
                        type: 'object',
                        properties: {
                          percentage: {
                            type: 'number',
                            example: 3.99,
                          },
                          amount: {
                            type: 'number',
                            example: 0.39,
                          },
                        },
                      },
                      createdAt: {
                        type: 'string',
                        format: 'date-time',
                        example: '2022-02-23T23:50:17.333Z',
                      },
                      updatedAt: {
                        type: 'string',
                        format: 'date-time',
                        example: '2022-02-23T23:54:05.145Z',
                      },
                    },
                  },
                },
                net: {
                  type: 'object',
                  properties: {
                    amount: {
                      type: 'number',
                      example: 96,
                    },
                  },
                },
                createdAt: {
                  type: 'string',
                  format: 'date-time',
                  example: '2022-02-23T23:50:17.333Z',
                },
                updatedAt: {
                  type: 'string',
                  format: 'date-time',
                  example: '2022-02-23T23:54:05.145Z',
                },
              },
            },
            status: {
              type: 'string',
              enum: ['READY_TO_RESCUE', 'RESCUED', 'NOT_RESCUED', 'REFUNDED'],
              example: 'READY_TO_RESCUE',
            },
            rescued: {
              type: 'object',
              properties: {
                at: {
                  type: 'string',
                  example: '2022-02-23T23:54:05.145Z',
                  format: 'date-time',
                },
              },
              example: null,
            },
            refunded: {
              type: 'object',
              properties: {
                at: {
                  type: 'string',
                  example: '2022-05-30T23:21:16.858Z',
                  format: 'date-time',
                },
                amount: {
                  type: 'number',
                  example: 95,
                },
              },
              example: null,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              example: '2022-02-23T23:50:17.333Z',
            },
            updatedAt: {
              type: 'string',
              format: 'date-time',
              example: '2022-02-23T23:54:05.145Z',
            },
          },
        },
        want: {
          id: 'deb1ec8d-5cc6-4121-9b2e-17b10e0eb6a5',
          offer: {
            id: '14de52ed-77af-4854-8df2-75eedc557f6e',
            establishmentId: '6e344095-70be-4e18-852e-84e80ca4e9dc',
            name: 'Salada tropical',
            currency: 'BRL',
            description:
              'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            prices: {
              total: 22.5,
              sale: 11.25,
              economy: 11.25,
            },
            discountInPercentage: 50,
            startAt: '2022-02-18T08:00:00.000Z',
            endAt: '2022-02-18T18:00:00.000Z',
            maxConsumeDate: '2022-08-31T23:59:59.000Z',
            status: 'ACTIVE',
            stock: 100,
            photos: [
              {
                id: '04993242-7e96-4a11-8293-8c95be412b35',
                file: {
                  id: 'ff6d2b69-bf76-4b94-9f5b-77c9b6e9e3d8',
                  url: 'https://cdn/categories/brasileira.jpg',
                  type: 'PHOTO',
                  refId: '3665dcca-e08a-4fc4-bfc8-d81146860326',
                  refType: 'CATEGORY_PHOTO',
                  createdAt: '2021-11-10T16:16:16.185Z',
                  updatedAt: '2021-11-10T16:16:16.185Z',
                },
                default: true,
                createdAt: '2022-02-19T00:10:02.738Z',
                updatedAt: '2022-02-19T00:10:02.738Z',
              },
            ],
            createdAt: '2022-02-18T08:00:01.352Z',
            updatedAt: '2022-02-18T08:00:01.352Z',
          },
          customer: {
            id: '5f1ac321-96b0-4e0b-9ff2-d3b36918c510',
            refId: 'customer-123-firebaseid',
            email: 'johndoe@hotmail.com',
            name: 'John Doe',
            documentNumber: '42504582021',
            phone: '96993566486',
            deleted: false,
            hasUserAccount: true,
            createdAt: '2022-02-20T20:02:57.102Z',
            updatedAt: '2022-02-20T20:02:57.102Z',
          },
          transaction: {
            id: 'deb1ec8d-5cc6-4121-9b2e-17b10e0eb6a5',
            method: 'CREDIT_CARD',
            status: 'APPROVED',
            amount: 100,
            currency: 'BRL',
            approved: {
              at: '2022-02-23T23:54:05.145Z',
            },
            refunded: null,
            declined: null,
            fees: [
              {
                id: '65d16861-4ff0-4cee-a98d-7188f7133dfe',
                transactionId: '4aa17bdf-babc-453a-9c95-4d80f4e9c411',
                type: 'PAYMENT_GATEWAY_PROVIDER',
                amount: 3.9,
                commission: {
                  percentage: 3.99,
                  amount: 0.39,
                },
                createdAt: '2022-02-23T23:50:17.333Z',
                updatedAt: '2022-02-23T23:54:05.145Z',
              },
            ],
            net: {
              amount: 96,
            },
            createdAt: '2022-02-23T23:50:17.333Z',
            updatedAt: '2022-02-23T23:54:05.145Z',
          },
          status: 'READY_TO_RESCUE',
          rescued: null,
          refunded: null,
          createdAt: '2022-02-23T23:50:17.333Z',
          updatedAt: '2022-02-23T23:54:05.145Z',
        },
      },
    ])(
      'When informed an object schema correctly, should return an object serialized',
      ({ schema, want }) => {
        const expected = ParseObjectSchema(schema)
        expect(expected).toStrictEqual(want)
      }
    )
  })

  describe('Unhappy paths', () => {})
})
