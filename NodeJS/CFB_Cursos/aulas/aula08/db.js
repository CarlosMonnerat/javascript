const conectar = async () => {
   if(global.conexao && global.conexao.state != 'disconected')
      return global.conexao
   const mysql = require('mysql2/promise.js'); 
   const con = mysql.createConnection('mysql://root:****************@localhost:3306/cfbcursos'); //'mysql://Usuário(root):senha@localhost:porta/banco'
   console.log('Conectou ao Banco!!!');
   global.conexao = con;
   return con;
};

//CREATE
const insereCliente = async(cliente) => {
   const con = await conectar();
   const sql = 'INSERT INTO cliente_node (nome, idade) VALUES (?, ?)';
   const valores = [cliente.nome, cliente.idade];
   await con.query(sql, valores);
};

//READ
const todosClientes = async() => {
   const con = await conectar();
   const [linhas] = await con.query('SELECT * FROM cliente_node');
   return await linhas;
};

//UPDATE
const atualizaCliente = async(id, cliente) => {
   const con = await conectar();
   const sql = 'UPDATE cliente_node SET nome = ?, idade = ? WHERE id = ?';
   const valores = [cliente.nome, cliente.idade, id];
   await con.query(sql, valores);
};

//DELETE
const deletaCliente = async(id) => {
   const con = await conectar();
   const sql = 'DELETE FROM cliente_node WHERE id = ?';
   const valores = [id];
   await con.query(sql, valores);
};


module.exports = {insereCliente, todosClientes, atualizaCliente, deletaCliente};