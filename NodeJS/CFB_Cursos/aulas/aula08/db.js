const conectar = async () => {
   if(global.conexao && global.conexao.state != 'disconected')
      return global.conexao
   const mysql = require('mysql2/promise.js'); 
   const con = mysql.createConnection('mysql://root:blockchain_dev42@localhost:3306/cfbcursos'); //'mysql://Usuário(root):senha@localhost:porta/banco'
   console.log('Conectou ao Banco!!!');
   global.conexao = con;
   return con;
};

conectar();
module.exports = {};