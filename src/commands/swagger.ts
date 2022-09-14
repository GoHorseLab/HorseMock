import {
  GluegunCommand,
  GluegunPrompt,
  GluegunFilesystem,
  GluegunPrint,
} from 'gluegun'

import * as SwaggerParser from '@apidevtools/swagger-parser'

type SwaggerOptions = {
  port: number
  path: string
}

type IncomingSwaggerOptions = Partial<SwaggerOptions>

async function getPortOption(prompt: GluegunPrompt): Promise<number> {
  let newPort = 8080

  const portResult = await prompt.ask({
    message: 'Which port do you want to start the API?',
    name: 'incomingPort',
    type: 'numeral',
    float: false,
    round: false,
    required: true,
    initial: newPort,
  })

  newPort = Number(portResult.incomingPort)

  return newPort
}

async function getPathOption(prompt: GluegunPrompt): Promise<string> {
  const pathResult = await prompt.ask({
    message: 'Where is your swagger file located?',
    name: 'incomingPath',
    type: 'input',
    required: true,
  })
  return pathResult.incomingPath
}

async function getOptions(
  options: IncomingSwaggerOptions,
  prompt: GluegunPrompt
): Promise<SwaggerOptions> {
  if (!options?.port) {
    options.port = await getPortOption(prompt)
  }

  if (!options?.path) {
    options.path = await getPathOption(prompt)
  }

  return options as SwaggerOptions
}

async function validateOptions(
  { path }: SwaggerOptions,
  fileSystem: GluegunFilesystem,
  print: GluegunPrint
) {
  const isValidPath = await fileSystem.existsAsync(path)

  if (!isValidPath) {
    print.error('Invalid path, check if file exists or not.')
    return false
  }

  const fileInfo = await fileSystem.inspectAsync(path)
  const isValidFileFormat =
    fileInfo.type === 'file' &&
    (fileInfo.name.endsWith('json') || fileInfo.name.endsWith('yaml'))

  if (!isValidFileFormat) {
    print.error('Invalid file, should be a json or yaml')
    return false
  }

  return true
}

async function validateSwagger(path: string) {
  try {
    await SwaggerParser.validate(path)
    return { isValid: true, details: undefined }
  } catch (err) {
    return { isValid: false, details: err?.details }
  }
}

const command: GluegunCommand = {
  name: 'swagger',
  alias: 'sw',
  description: 'An API mock base on OpenAPI specification',
  run: async (toolbox) => {
    const { parameters, prompt, filesystem, print } = toolbox

    const options = await getOptions(parameters.options, prompt)

    const isValidOptions = await validateOptions(options, filesystem, print)
    if (!isValidOptions) {
      process.exit()
    }

    const { path } = options

    const { isValid, details } = await validateSwagger(path)
    if (!isValid) {
      print.warning('Your schema has some errors, please check it')
      console.warn(details)

      const { wantToProceed } = await prompt.ask({
        type: 'confirm',
        message: ' Do you want to proceed with schema errors?',
        name: 'wantToProceed',
        initial: false,
      })

      if (!wantToProceed) {
        process.exit()
      }
    }

    // const document = await SwaggerParser.parse(path)
  },
}

module.exports = command
