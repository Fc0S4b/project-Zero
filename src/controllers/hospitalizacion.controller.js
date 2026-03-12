// manejo de request y response

import { obtenerHospitalizacionesCuenta } from '../services/hospitalizacion.service.js'
import { logger } from '../config/logger.js'

export async function getHospitalizacionesCuenta(req, res) {
  try {
    const { cuentaId } = req.params
    logger.info(`Consultando hospitalizaciones para cuenta ${cuentaId}`)
    const data = await obtenerHospitalizacionesCuenta(cuentaId)
    res.json(data)
  } catch (error) {
    logger.error(error.message)
    res.status(500).json({ error: 'Error obteniendo hospitalizaciones' })
  }
}
