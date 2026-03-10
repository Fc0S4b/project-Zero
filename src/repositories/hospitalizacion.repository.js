// solo querys sql

import { db } from '../config/database.js'

export async function findByCuentaId(cuentaId) {
  const query = `
 SELECT
  nombre_paciente,
  fecha_ingreso,
  fecha_egreso,
  lugar_intervencion
 FROM hospitalizaciones
 WHERE cuenta_id = $1
 `

  const result = await db.query(query, [cuentaId])
  return result.rows
}
