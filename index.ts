import * as dotenv from 'dotenv'
dotenv.config()
import { start } from './src/app'

if (require.main) {
  start({
    server: {
      password: process.env.password,
      staticDir: process.env.staticDir,
      port: process.env.port
    },
    db: {
      name: process.env.dbName,
      url: process.env.dbUrl
    }

  })
}
