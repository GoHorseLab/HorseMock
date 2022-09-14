import { GluegunCommand, GluegunPrompt } from 'gluegun'

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

const command: GluegunCommand = {
  name: 'swagger',
  alias: 'sw',
  description: 'An API mock base on OpenAPI specification',
  run: async (toolbox) => {
    const { parameters, prompt } = toolbox

    const options = await getOptions(parameters.options, prompt)

    console.log(options)
  },
}

module.exports = command
