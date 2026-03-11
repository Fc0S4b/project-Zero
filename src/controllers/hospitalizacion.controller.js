// manejo de request y response

import { obtenerHospitalizacionesCuenta } from '../services/hospitalizacion.service.js'

export async function getHospitalizacionesCuenta(req, res) {
  try {
    const { cuentaId } = req.params
    const data = await obtenerHospitalizacionesCuenta(cuentaId)
    res.json(data)
  } catch (error) {
    res.status(500).json({ error: 'Error obteniendo hospitalizaciones' })
  }
}
