class Login{
    static logado = false;
    static matlogado = null;
    static nomelogado = null;
    static acessologado = null;
    static endpoint = "https://loginv1.cfbcursos.repl.co/";
    //https://loginv1.cfbcursos.repl.co/?matricula=123&senha=321

    static login=(mat,pass)=>{
        this.endpoint+=`?matricula=${mat}&senha=${pass}`
        fetch(this.endpoint)
        .then(res=>res.json())
        .then(res=>{
            
        })
    }
}
export{Login};