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

//Funções auxiliares
   //retorna o objeto pelo 'id'
function searchById(id){
   return selecoes.filter(selecao => selecao.id == id); 
};
   //retorna a posição (ou index) do elementdo no array por 'id'
function searchIndexSelecao(id){
   return selecoes.findIndex(selecao => selecao.id == id);
};

//Requisições do tipo "Get"
app.get('/', (req, res) => {        
   res.send('Hello World 05!');
});

app.get('/selecoes', (req, res) => {        
   res.send(selecoes);
});


//Requisição do tipo "Post"
app.post('/selecoes', (req, res) => {
   selecoes.push(req.body);                                
   res.status(201).send('Seleção cadastrada com sucesso!') 
});


//Requisição por parâmetro - Neste caso por 'id'
app.get('/selecoes/:id', (req, res) => {
   res.json(searchById(req.params.id));
});


//Requisição do tipo "Delete"
app.delete('/selecoes/:id', (req, res) => {
   let index = searchIndexSelecao(req.params.id);
   selecoes.splice(index, 1);
   res.send(`Seleção com id ${req.params.id} excluída com sucesso!`);
});



export default app;
