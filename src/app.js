// Importando o packages
import express from 'express'

// instanciando o servidor
const app = express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(express.json())

// importando os controllers
import usuarioController from './controllers/usuarioController.js'
import adminController from './controllers/adminController.js'
import parceirosController from './controllers/parceirosController.js'
import noticiasController from './controllers/noticiasController.js'

usuarioController.rotas(app)
adminController.rotas(app)
parceirosController.rotas(app)
noticiasController.rotas(app)

export default app
