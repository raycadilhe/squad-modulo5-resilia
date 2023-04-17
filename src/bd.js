import Usuario from './models/usuario.js'
import Parceiros from './models/Parceiros.js'
import Admin from './models/admin.js'
import Noticias from './models/noticias.js'
import Contatos from './models/contato.js'

// Cria vários objetos e os adiciona a um array para simular uma lista de objetos
const bdUsuario = []
const bdParceiros = []
const bdAdmin = []
const bdNoticias = []
const bdContato = []
// Cria um objeto do tipo Usuario e adiciona a lista de usuarios
const usuario = new Usuario('Nome do usuário', 'ulysses@gmail.com', 'Senha')
bdUsuario.push(usuario)
const usuario2 = new Usuario('Nome do usuário 2', 'Email 2', 'Senha 2')
bdUsuario.push(usuario2)

// Cria um objeto do tipo parceiros e adiciona a lista de parceiros
const parceiros = new Parceiros('ID', 'Parceiro', 'urlLogo', 'Descricao')
bdParceiros.push(parceiros)
const parceiros2 = new Parceiros('ID', 'Parceiro', 'urlLogo', 'Descricao')
bdParceiros.push(parceiros2)

// Cria um objeto do tipo Admin e adiciona a lista de Admins
const admin = new Admin('0', 'Danilo', 'Santos', 'danilo@gmail.com', 'Senha')
bdAdmin.push(admin)
const admin2 = new Admin('1', 'Rayssa', 'Cadilhe', 'rayssa@gmail.com', 'Senha')
bdAdmin.push(admin2)

// Cria um objeto do tipo noticias e adiciona a lista de noticias
const noticias = new Noticias('0', '', '', '', '', '', '', '')
bdParceiros.push(noticias)
const noticias2 = new Noticias('1', '', '', '', '', '', '', '')
bdParceiros.push(noticias2)

//Cria um objeto do tipo Contato e adiciona a lista de Contato
const contato =new Contatos ('0', '', '', '', '', '', '', '', '')

// Exporta as listas de objetos
export { bdUsuario, bdParceiros, bdAdmin, bdNoticias, bdContato }