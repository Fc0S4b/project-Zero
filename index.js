const express = require('express')

const app = express()
app.use(express.json())

const users = [
  {
    username: 'admin',
    password: '1234',
    role: 'admin',
    token: 'admin-token',
  },
  {
    username: 'user',
    password: '1234',
    role: 'limited',
    token: 'limited-token',
  },
]

app.get('/', (req, res) => {
  res.send('Servidor funcionando')
})

app.use('/login', (req, res) => {
  const { username, password } = req.body

  const user = users.find((u) => u.username === username)

  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Credenciales incorrectas' })
  }
  res.json({
    token: user.role + '-token',
    role: user.role,
  })
})

function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ message: 'Token requerido' })
  }

  const token = authHeader.replace('Bearer ', '')

  const user = users.find((u) => u.token === token)

  if (!user) {
    return res.status(403).json({ message: 'Token inválido' })
  }

  req.user = user

  next()
}

app.get('/profile', authMiddleware, (req, res) => {
  res.json({
    message: 'Perfil accesible',
    user: req.user.username,
    role: req.user.role,
  })
})

app.get('/admin', authMiddleware, (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Acceso solo para administradores' })
  }

  res.json({
    message: 'Bienvenido admin',
  })
})

app.listen(3000, () => {
  console.log('Servidor corriendo en puerto 3000')
})
