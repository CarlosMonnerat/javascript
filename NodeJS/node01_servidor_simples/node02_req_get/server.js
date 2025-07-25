//Refatorando o servidor
import app from './src/app.js';        //Importação do app em "ES module"

const PORT = 3000;                     //É recomendado utilizar as letras em Maiúsculas

app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
});
