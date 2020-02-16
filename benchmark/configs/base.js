import path from 'path'

const rootDir = path.resolve(__dirname, '../../example')

const baseConfig = require(`${rootDir}/nuxt.config.js`)

export default {
  ...baseConfig,
  rootDir,
  render: {
    compressor: false,
    etag: false
  }
}
