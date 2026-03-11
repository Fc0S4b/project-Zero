import pkg from 'pg'
import { env } from './env.js'

const { Pool } = pkg

export const db = new Pool({
  host: env.dbHost,
  port: env.dbPort,
  user: env.dbUser,
  password: env.dbPassword,
  database: env.dbName,
})
