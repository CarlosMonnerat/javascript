// Interface e Funções
interface curso {
    titulo: string;
    des: string;
    numAula: number;
    maxAlunos ?: number;    //'?' Parrâmetro opcional
    inicarCurso ?(teste: string): void;
 };

 //Interfaces filhas
 interface cursoProg extends curso {
    numAula: number;
    maxAlunos ?: number;

 };

 interface cursoArtes extends curso {
    numAula: number;
    maxAlunos ?: number;
 };

 let curso_4: cursoProg;
 let curso_5: cursoProg;
 let curso_6: cursoArtes;


 curso_4 = { titulo: "TypeScript", des: "Curso de Typescript para iniciantes", numAula: 100, maxAlunos: 50, inicarCurso(t: string){}};
 curso_5 = { titulo: "JavaScript", des: "Curso de Javascript puro", numAula: 200, maxAlunos: 80 };
 curso_6 = { titulo: "C++", des: "Curso de C++ Avançado", numAula: 70 };

 console.log(curso_4);
 console.log(curso_5);
 console.log(curso_6);
