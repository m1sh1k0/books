const config = {
  env: 'development',
  port: 3000,
  mongo: {
    uri: 'mongodb://localhost/booklibrary',
    options: {
      debug: true
    }
  },
  ip: 'localhost',
  log: {
    level: 'debug',
    format: 'dev'
  }
}

export default config
