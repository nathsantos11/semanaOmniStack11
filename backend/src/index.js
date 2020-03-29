const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();


app.use(cors({
  //se for colocar em produção, preencher abaixo:
  //origin: 'http://meuapp.com'
}));
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alertar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 * 
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetro nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetro utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT + FROM users
 * Query Builder: table('users').select('*').where()
 */



