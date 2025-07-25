import express from 'express';      //Substituição da importação de "commonJS" para "ES module"
const app = express();

// Mock - Estrura de dados para testes
const selecoes = [
   {id: 1, selecao: 'Brasil', grupo: 'G'},
   {id: 3, selecao: 'Suíça', grupo: 'G'},
   {id: 2, selecao: 'Sérvia', grupo: 'G'},
   {id: 4, selecao: 'Camarões', grupo: 'G'},
];

//Requisição do tipo "Get"
app.get('/', (req, res) => {        
   res.send('Hello World 02!');
});

//Nova requisição com um novo 'Endpoint'
app.get('/selecoes', (req, res) => {        
   res.send(selecoes);
});

export default app;                 //Exporta a constante "app" como padrão
