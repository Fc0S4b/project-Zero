import express from 'express'
import hospitalizacionRoutes from './routes/hospitalizacion.routes.js'

const app = express()

app.use(express.json())

app.use('/api', hospitalizacionRoutes)

export default app
