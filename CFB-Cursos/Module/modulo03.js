class Cursos{
    static cursos = ["JavaScript","HTML","CSS","Arduino","C++","Java","C#"] //'Static' permite não precisar instanciar a classe para poder utiliza-la
    constructor(){

    }
    static getAllCursos=()=>{   //Método que retorna o Array cursos
        return this.cursos
    }
    static getCurso=(i_curso)=>{    //Método que retorna o curso do índice passado no parametro 
        return this.cursos[i_curso]
    }
    static addCurso=(newCurso)=>{   //Método que add um curso novo ao Array cursos
        this.cursos.push(newCurso)
    }
    static RemoveCursos=()=>{       //Método que limpa todo o Array cursos
        this.cursos = []
    }
}

export default Cursos //'default' classifica como padrão e permite alterar o nome da classe no artivo que irá importar
