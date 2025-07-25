const express = require('express'); //Importa o 'Express' através do 'require'
const app = express();              //Cria uma instância do 'Express' no projeto
const port = 3000;                  //Define qual porta queremos utilizar

//Cria uma rota padrão (Raiz)
app.get('/', (req, res) => {        //req = requisição, res = resposta
   res.send('Hello World!');
});

//Escuta a porta definina em 'port'
app.listen(port, () => {
   console.log(`Servidor rodando na porta ${port}`);
});
