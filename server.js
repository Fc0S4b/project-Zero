import dotenv from 'dotenv'
import app from './src/app.js'
import { validateEnv, env } from './src/config/env.js'
import { logger } from './src/config/logger.js'

dotenv.config()

const PORT = env.port || 3000

app.listen(env.port, () => {
  logger.info(`Servidor corriendo en puerto ${env.port}`)
})
