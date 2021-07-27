// Regras estritas tem seguir lint e essas coisas

'use strict'

//Funcao que lida com a normalizacao de portas
 function normalizePort(val) {

   const port = parseInt(val, 10);

   if (isNaN(port)) {
     return val;
   }

   if (port >= 0) {
     return port;
   }

   return false;

 }

//Funcao tratamento de erros
function onError(error) {
  if (error.syscall != 'listen') {
    throw error;
  }

  const bind = (typeof port === 'string' ? 'Pipe' + port : 'Port' + port); //Operador ternario

  switch (error.code) {
    case 'EACCES':  //Erro de permissão
      console.error(bind + ' requires elevated privileges')
      process.exit(1);
      break;
    case 'EADDRINUSE': //Endereço em uso
      console.error(bind + ' is already in use')
      process.exit(1);
    //Adicionar outros erros da lista de erros do node
    default:
      throw error;

  }

}

//Funcao // DEBUG:
function onListening() {
  const addr = server.address();
  const bind = (typeof addr === 'string' ? 'Pipe ' +  addr : 'Port ' + addr.port);
  debug('Listening on ' + bind);

}

// O que vou usar
 const http = require('http');
 const debug = require('debug')('nodestr:server');
 const app = require('../src/app')

//Port e set app
const port = normalizePort(process.env.PORT || '3000'); //Se usar Azure o process.env.PORT lida com a atribuicao de porta
app.set('port', port);

const server = http.createServer(app); //Não entendo isso

// Ouve a porta
server.listen(port);
//Em caso de erros
server.on('error', onError);
//Debug
server.on('listening', onListening);

console.log("Está rodando uhu" + port);
