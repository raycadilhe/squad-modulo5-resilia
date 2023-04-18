import express from 'express';
import cors from 'cors';
import usuarioController from './src/controllers/usuarioController.js';
import adminController from './src/controllers/adminController.js';
import contatoController from './src/controllers/contatoController.js';
import imagensController from './src/controllers/imagensController.js';
import noticiasController from './src/controllers/noticiasController.js';
import parceirosController from './src/controllers/parceirosController.js';

// Importando o express

const app = express();
const port = 3000

//O middleware "express.json()" irá converter esse JSON em um objeto JavaScript que pode ser manipulado pelo servidor. 
app.use(express.json());
app.use(cors())

usuarioController.getUsauarioController(app)
adminController.getAdminController(app)
contatoController.getContatoController(app)
imagensController.getImagensController(app)
noticiasController.getNoticiasController(app)
parceirosController.getParceirosController(app)

//Servidor rodando na porta 3000
app.listen(`${port}`, () =>
console.log(`Servidor iniciado na porta ${port}`)
);
