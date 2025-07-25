import express from 'express';
const app = express();
app.use(express.json());

// Mock - Estrura de dados para testes
const selecoes = [
   {id: 1, selecao: 'Brasil', grupo: 'G'},
   {id: 2, selecao: 'Suíça', grupo: 'G'},
   {id: 3, selecao: 'Camarões', grupo: 'G'},
   {id: 4, selecao: 'Sérvia', grupo: 'G'}
];

//Função auxiliar para selecionar os dados pelo 'ID'
function searchById(id){
   return selecoes.filter(selecao => selecao.id == id);     //Se True, o retorno será um Objeto 
};

//Requisição do tipo "Get"
app.get('/', (req, res) => {        
   res.send('Hello World 04!');
});

app.get('/selecoes', (req, res) => {        
   res.send(selecoes);
});

//Requisição por parâmetro - Neste caso o 'id'
app.get('/selecoes/:id', (req, res) => {
   let index = req.params.id;
   res.json(searchById(index));
});


//Requisição do tipo "Post"
app.post('/selecoes', (req, res) => {
   selecoes.push(req.body);                                
   res.status(201).send('Seleção cadastrada com sucesso!') 
});

export default app;
