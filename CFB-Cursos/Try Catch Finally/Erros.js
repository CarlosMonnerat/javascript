//                                      TRATAMENTO DE ERROS


try{                    
    consoli.log('CFB Cursos');                          //Ao detectar um erro (consoli) o "try" é interrompido e passa para o "Catch"
}catch(e){
    console.log("ERRO");                                // Ao entrar no 'catch' é executo o comando e passa a exceção para o 'e'
    console.log("Mensagem de erro: "+e.message);        // '.message' informa qual foi o erro encontrado

}

// Erros Tratados internamente pelo JS (Não geral uma exeção)

var num;

try{
    num = 10/0;                                         // Retorna como 'Infinity'
    console.log("ERRO: "+num); 
}catch{

}