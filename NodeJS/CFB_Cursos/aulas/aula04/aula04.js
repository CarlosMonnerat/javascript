//Servidor simples com Node puro
const http = require('http');
const porta = process.env.PORT;

const servidor = http.createServer((req, res) =>{
   res.writeHead(200, {'Content-Type' : 'text/plain'});
   res.end('CFB Cursos');

});

servidor.listen(porta || 3000, () => {console.log('Servidor Rodando!')});