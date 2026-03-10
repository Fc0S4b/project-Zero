Bitácora

09-03-26: Pequeña introducción en crear un servidor de autenticación simulando token vía header Authorization con middleware, verificación de rol y acceso a ruta con express

10-3-26

GET /hospitalizaciones
GET /hospitalizaciones/:id
GET /cuentas/:cuentaId/hospitalizaciones
POST /hospitalizaciones
PUT /hospitalizaciones/:id
DELETE /hospitalizaciones/:id

GET /cuentas/:cuentaId/hospitalizaciones

{
nombre: "",
fecha_ingreso: "",
fecha_egreso: "",
lugar_intervencion: ""
}

Base de datos modelo simple:
hospitalizaciones

id
cuenta_id
nombre_paciente
fecha_ingreso
fecha_egreso
lugar_intervencion
created_at
updated_at

definí una base para crear datos de cuentas hospitalizados tal que al solicitar una cuenta entregue datos asociados a esa cuenta
