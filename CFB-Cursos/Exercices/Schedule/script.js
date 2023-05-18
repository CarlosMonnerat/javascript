const cabecalho = document.querySelector("#cabecalho");
const menu = document.querySelector("#menu");
const btn_home = document.querySelector("#btn_home");
const btn_novo = document.querySelector("#btn_novo");
const btn_pesquisar = document.querySelector("#btn_pesquisar");
const btn_gestao = document.querySelector("#btn_gestao");
const btn_sobre = document.querySelector("#btn_sobre");
const principal = document.querySelector("#principal");

btn_home.addEventListener("click",()=>{
    window.open("./pages/home.html","if_principal");
});

btn_novo.addEventListener("click",()=>{
    window.open("./pages/novo.html","if_principal");
});

btn_pesquisar.addEventListener("click",()=>{
    window.open("./pages/pesquisar.html","if_principal");
});

btn_gestao.addEventListener("click",()=>{
    window.open("./pages/gestao.html","if_principal");
});

btn_sobre.addEventListener("click",()=>{
    window.open("./pages/sobre.html","if_principal");
});
