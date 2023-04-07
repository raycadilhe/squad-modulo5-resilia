import Eventos from './src/controllers/eventos.js'
import Calendario from './src/controllers/calendarios.js'
import Acoes from './src/controllers/acoes.js'
import express from 'express';

const app = express ();
const port = 3000;

app.get('/', (req,res) => {
    res.send('Página principal')
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})

app.use(express.json())

Eventos.eventosRotas(app);
Calendario.calendarioRotas(app);
Acoes.acoesRotas(app);