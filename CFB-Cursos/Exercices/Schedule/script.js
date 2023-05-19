const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");

const abrirPagina=(element,url)=>{
    const abas = [...document.querySelectorAll(".aba")];
    abas.forEach(e=>{
        e.classList.remove("abaSelecionada")
    })
    element.classList.add("abaSelecionada");
    window.open(url,"if_principal");
}

btn_home.addEventListener("click",(event)=>{
    abrirPagina(event.target,"./pages/home.html");
});

btn_novo.addEventListener("click",(event)=>{
    abrirPagina(event.target,"./pages/novo.html");
});

btn_pesquisar.addEventListener("click",(event)=>{
    abrirPagina(event.target,"./pages/pesquisar.html");
});

btn_gestao.addEventListener("click",(event)=>{
    abrirPagina(event.target,"./pages/gestao.html");
});

btn_sobre.addEventListener("click",(event)=>{
    abrirPagina(event.target,"./pages/sobre.html");
    
});

