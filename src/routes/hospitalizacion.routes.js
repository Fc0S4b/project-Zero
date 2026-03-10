import express from 'express'
import { getHospitalizacionesCuenta } from '../controllers/hospitalizacion.controller.js'

const router = express.Router()

router.get('/cuentas/:cuentaId/hospitalizaciones', getHospitalizacionesCuenta)

export default router
