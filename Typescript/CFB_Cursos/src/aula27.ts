// Interface e Objetos Literias
 interface curso {
    titulo: string;
    des: string;
    numAula: number;
    maxAlunos ?: number;    //'?' Parrâmetro opcional
 };

 let curso_1: curso;
 let curso_2: curso;
 let curso_3: curso;

 curso_1 = { titulo: "TypeScript", des: "Curso de Typescript para iniciantes", numAula: 100, maxAlunos: 50 };
 curso_2 = { titulo: "JavaScript", des: "Curso de Javascript puro", numAula: 200, maxAlunos: 80 };
 curso_3 = { titulo: "C++", des: "Curso de C++ Avançado", numAula: 70 };

 console.log(curso_1);
 console.log(curso_2);
 console.log(curso_3);

