CREATE TABLE hospitalizaciones (
 id SERIAL PRIMARY KEY,
 cuenta_id INTEGER NOT NULL,
 nombre_paciente TEXT NOT NULL,
 fecha_ingreso DATE,
 fecha_egreso DATE,
 lugar_intervencion TEXT,
 created_at TIMESTAMP DEFAULT NOW(),
 updated_at TIMESTAMP DEFAULT NOW()
)