const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//app.use(cors({origin: 'http://meuapp.com'}));
app.use(cors());
app.use(express.json());
app.use(routes);

/**
   * Rota / Recurso
*/
/**
 * Metodos HTTP
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parametros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota apos o simbolo "?" (Filtros, Paginação {?page=2} )
 * Route Params: Parâmetros utilizados para identificar recursos {users/:id}
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * BANCO DE DADOS:
  * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB, etc
  * 
  */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */




app.listen(3333);