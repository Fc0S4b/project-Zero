import pkg from 'pg'

const { Pool } = pkg

export const db = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'password',
  database: 'hospital',
  port: 5432,
})
