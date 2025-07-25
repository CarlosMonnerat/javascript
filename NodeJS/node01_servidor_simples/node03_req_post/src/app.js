import express from 'express';
const app = express();
app.use(express.json());                                 //Indica para o express ler o body formato 'json' enviado pelo método 'post'

// Mock - Estrura de dados para testes
const selecoes = [
   {id: 1, selecao: 'Brasil', grupo: 'G'},
   {id: 3, selecao: 'Suíça', grupo: 'G'},
   {id: 2, selecao: 'Sérvia', grupo: 'G'},
   {id: 4, selecao: 'Camarões', grupo: 'G'},
];

//Requisição do tipo "Get"
app.get('/', (req, res) => {        
   res.send('Hello World 03!');
});

app.get('/selecoes', (req, res) => {        
   res.send(selecoes);
});

//Requisição do tipo "Post"
app.post('/selecoes', (req, res) => {
   selecoes.push(req.body);                                //faz um push do corpo da requisição para dentro do Mock
   res.status(201).send('Seleção cadastrada com sucesso!') //status(201) representa o resultado da requisição (httpstatus.com.br)

});

export default app;
