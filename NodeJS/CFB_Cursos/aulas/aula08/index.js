(async () => {
   const db = require('./db');
   console.log('Inserir Novo cliente:');
   const nom = "Brastorgilson";
   const ida= "20";
   await db.insereCliente({nome: nom, idade: ida});

   console.log('Obter todos os clientes');
   const clientes = await db.todosClientes();
   console.log(clientes);
})();
