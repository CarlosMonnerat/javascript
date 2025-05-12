const http = require('http');
const porta = process.env.PORT || 3000;
const retorno = () => {console.log('Servidor Rodando')};

const servidor = http.createServer((req, res) =>{
   res.writeHead(200,{'Content-Type': 'text/plain'});
   res.write('CFB Cursos');
   res.end();
});

servidor.listen(porta, retorno);