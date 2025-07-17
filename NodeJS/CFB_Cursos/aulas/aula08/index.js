
(async () => {
   const db = require('./db');
   // console.log('Novo cliente inserido');
   // const nom = "Brastorgilson";
   // const ida= "20";
   // await db.insereCliente({nome: nom, idade: ida});

   // const id = 4;
   // const nom = "Praguilino";
   // const ida= 35;
   // await db.atualizaCliente(id, {nome: nom, idade: ida});
   // console.log('Cliente' +id+ 'Atualizado');

   const id = 3;
   await db.deletaCliente(id);
   console.log('Cliente' +id+ 'Deletado');

   console.log('Obter todos os clientes');
   const clientes = await db.todosClientes();
   console.log(clientes);
})();
