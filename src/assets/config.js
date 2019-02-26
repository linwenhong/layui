const env = 'local'

const Config = {}

switch (env) {
  case 'local':
    Config.api_url = 'http://localhost:3000/'
    Config.base_url = 'http://localhost:8085/'
    break
  case 'test':
    Config.api_url = 'http://localhost:3000/'
    Config.base_url = 'http://localhost:8085/'
    break
  case 'prod':
    Config.api_url = 'http://localhost:3000/'
    Config.base_url = 'http://localhost:8085/'
    break
  default:
    console.error('Config error')
}

module.exports = Config
