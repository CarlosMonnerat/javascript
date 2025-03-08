//NULL - UNDEFINED - UNKNOWN

//NULL
let nNome: string | null; 
nNome = null;
console.log(nNome);

//UNDEFINED
let undNome;
console.log(undNome);

//UNKNOWN - Só pode ser atribuído em tipos unknown ou any
let unkNome: unknown = nNome;
let unkNum: any = unkNome;
console.log(unkNum);