// lógica del negocio
import { findByCuentaId } from '../repositories/hospitalizacion.repository.js'

export async function obtenerHospitalizacionesCuenta(cuentaId) {
  return await findByCuentaId(cuentaId)
}
