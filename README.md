# Projeto em Squad - Módulo 5 - Resilia
Você e sua equipe foram escalados para desenvolverem propostas de APIs que serão o produto mínimo viável de um aplicativo. Vocês devem escolher o tema do aplicativo para identificar as entidades.

**Tema escolhido:** Portal de Notícias da Zona norte do Rio.

## 💻 Como executar localmente? 
• [Instale o node.js](https://nodejs.org/en/download/)

• Abra o Visual Studio Code e execute os comandos:
```
npm install express
```
```
npm install sqlite3
```
```
npm install nodemon
```

• Após as instalações, execute o comando abaixo para rodar a API localmente.
```
npm start
```
Acesse através da url http://localhost:3000
*******

**Para visualizar a API no render, acesse:** https://squad-modulo5.onrender.com/

*******
# Rotas criadas
### USUARIO
 GET /usuario
 
 GET /usuario/:email
 
 POST /usuario
 
 DELETE /usuario/:email
 
 PUT /usuario/id/:id
 

### ADMIN
GET /admin

GET /admin/:email

POST /admin

DELETE /admin/:email

PUT /admin/id/:id


### CONTATO
 GET /contato
 
 GET /contato/:email
 
 POST /contato
 
 DELETE /contato/:email
 
 PUT /contato/id/:id
 
 
### NOTICIA
  GET /noticia
  
  GET /noticia/:titulo
  
  POST /noticia
  
  DELETE /noticia/id/:id
  
  PUT /noticia/id/:id
  
  
### PARCEIROS
  GET /parceiros
  
  GET /parceiros/:nome
  
  POST /parceiros
  
  DELETE /parceiros/id/:id
  
  PUT /parceiros/id/:id
  

### IMAGEM
 GET /imagem
 
 GET /imagem/:titulo
 
 POST /imagem
 
 DELETE /imagem/id/:id
 
 PUT /imagem/id/:id
 
