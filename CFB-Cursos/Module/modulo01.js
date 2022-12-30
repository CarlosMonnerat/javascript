/*
    módulos em JavaScript são uma forma de compartilhar informações entre arquivos, 
    dessa forma, todos os arquivos que realizarem a importação desse módulo poderão utilizar 
    e usufruir de suas funções ou informações que foram expostas. Dessa maneira, evitamos ter 
    que ficar carregando N arquivos .
*/

        //Arquivo.js 2
// import { cursos } from "./modulo02.js"; //Recebe os Arrays do Arquivo.js 2
// import { carros } from "./modulo02.js";

// console.log(cursos)
// console.log(carros)

        //Arquivo.js 3
    import c from "./modulo03.js";  //Como o classe está sendo exportado como default, podemos alterar o nome da classe 'cursos' para 'c'

    
    c.RemoveCursos()
    c.addCurso("Photoshop")
    console.log(c.getCurso(0))
    console.log(c.getAllCursos())
    