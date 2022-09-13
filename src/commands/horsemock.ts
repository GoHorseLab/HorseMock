import { GluegunCommand } from 'gluegun'

import { textSync } from 'figlet'

const command: GluegunCommand = {
  name: 'horsemock',
  run: async (toolbox) => {
    const { print } = toolbox

    console.log(print.colors.bgRed(textSync('HorseMock')))

    console.log(
      print.colors.yellow("Yeah, I'm gonna take my horse to the old town road")
    )

    console.log(print.colors.yellow("I'm gonna ride 'til I can't no more"))

    print.newline()

    console.log(print.colors.bgBlack('For run the OpenAPI mock command: '))
    console.log(
      print.colors.white(
        'horsemock swagger --port=8080 --path=$PWD/YOUR_PATH/YOUR_OPENAPI.{json,yaml}'
      )
    )

    print.newline()

    console.log(print.colors.bgBlack('For see other commands run: '))
    console.log(print.colors.white('horsemock help'))
  },
}

module.exports = command
