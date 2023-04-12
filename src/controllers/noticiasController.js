import Noticias from "../models/noticias.js";
import { dbNoticias } from "../infra/db.js";

class NoticiasController{

    static getNoticiasController( app ) {

        // Visualizar todos as noticias
        app.get('/noticias', (req, resp) =>
        resp.json(dbNoticias)
        );

        // Visualizar uma noticia 
        app.get('/noticias/:index', (req, resp) => {
            const { index } = req.params;
            resp.json(dbNoticias[index]);
        })

       // Visualizar uma noticia 
        app.post('/noticias/:titulo', (req, resp) => {
            const buscarTitulo = dbNoticias.filter((elemento) => elemento.email === req.params.email)
            resp.send(buscarTitulo)   
        })
        
        // Adicionando uma Noticia
        app.post('/noticias' , (req, resp) => {
          const { genero, titulo, subtitulo, descricao, autor, data, hora } = req.body
          const noticiasInserir = new Usuario ( genero, titulo, subtitulo, descricao, autor, data, hora )
          dbNoticias.push(noticiasInserir)
          console.log( genero, titulo, subtitulo, descricao, autor, data, hora )
          resp.json(dbNoticias)
        })

        // Atualizar dados de uma Noticia 
        app.put('/noticias/:index', (req, resp) => {
        const { index } = req.params;
        const { genero, titulo, subtitulo, descricao, autor, data, hora } = req.body;

        dbNoticias[index].genero = genero
        dbNoticias[index].titulo = titulo
        dbNoticias[index].subtitulo = subtitulo
        dbNoticias[index].descricao = descricao
        dbNoticias[index].autor = autor
        dbNoticias[index].data = data
        dbNoticias[index].hora = hora
        console.log( genero, titulo, subtitulo, descricao, autor, data, hora )
        resp.json(dbNoticias)
        })
        
        // Excluir uma Noticia
        app.delete('/noticias/:index', (req, resp) => {
            const { index } = req.params;

            db.splice(index, 1)
            resp.json({ message: 'Usuário deletado com sucesso'})
        })
    
    }
}


export default NoticiasController;