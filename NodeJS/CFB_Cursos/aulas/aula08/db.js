const conectar = async () => {
   if(global.conexao && global.conexao.state != 'disconected')
      return global.conexao
   const mysql = require('mysql2/promise.js'); //'mysql://Usuário(root):senha@localhost:porta/banco'
   const con = mysql.createConnection('mysql://root:blockchain_dev42@localhost:3306/cfbcursos');
   console.log('Conectou ao Banco!!!');
   global.conexao = con;
   return con;
};

conectar();
module.exports = {};