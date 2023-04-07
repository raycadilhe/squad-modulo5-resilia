class Eventos {
    static eventosRotas(app) {
        app.get('/eventos', (req, res) => {
            res.send('rota Get Eventos')
        })

        app.post('/eventos', (req, res) => {
            res.send('rota Post eventos');
            console.log(req.body);
        })
    }
}

export default Eventos