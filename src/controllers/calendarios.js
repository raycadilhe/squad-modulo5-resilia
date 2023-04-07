class Calendario {
    static calendarioRotas(app) {
        app.get('/calendario', (req, res) => {
            res.send('rota Get calendario')
        })

        app.post('/calendario', (req, res) => {
            res.send('rota Post calendario');
            console.log(req.body);
        })
    }
}

export default Calendario