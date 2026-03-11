import dotenv from 'dotenv'
import app from './src/app.js'
import { validateEnv, env } from './src/config/env.js'

dotenv.config()

const PORT = env.port || 3000

app.listen(env.port, () => {
  console.log(`Servidor corriendo en puerto ${env.port}`)
})
