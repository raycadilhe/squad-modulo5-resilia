class Acoes {
    static acoesRotas(app) {
        app.get('/acoes', (req, res) => {
            res.send('rota Get acoes')
        })

        app.post('/acoes', (req, res) => {
            res.send('rota Post acoes');
            console.log(req.body);
        })
    }
}

export default Acoes