//Manipulando um arquivo com appendFile
const http = require('http');
const fs = require('fs');
const porta = process.env.PORT;

const server = http.createServer((req, res) =>{
   if(req.url == '/'){
      fs.appendFile('teste.txt', 'Curso de Node - CFB Cursos', (err) =>{
         if(err) throw err;
         console.log('Arquivo Criado');
         res.end();
      });
   };
});

server.listen(porta || 3000, () =>{console.log('Servidor Rodando!')});