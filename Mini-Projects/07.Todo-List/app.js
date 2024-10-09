'use strict';

/*
    let banco = [                               (Array que funciona como um banco de dados armazenazenando as tarefas digitadas pelo usuário)
        {'tarefa':'Estudar JS', 'status': ''},
        {'tarefa':'Ler um Livro', 'status': 'checked'},         (O Banco de dados está sendo o localStorage)
        {'tarefa':'Trabalhar', 'status': ''}
]
*/

const getBanco = () => JSON.parse(localStorage.getItem('lista')) ?? [];                         //Ao pegar os itens do localStorage, ele retorna como string, por isso precisamos transforma-lo em OBJ(Json) 
const setBanco = (banco) => localStorage.setItem('lista', JSON.stringify(banco));               //Ao enviar itens ao localStorage precisamos transformas o OBJ(JSON) em string

// const criarItem = (tarefa, status, indice) => {                                                 //Cria as tarefas dentro do DOM*/
//     const item = document.createElement('label');
//     item.classList.add('todo__item');   
//     item.innerHTML = `
//         <input type="checkbox" ${status} data-indice = ${indice}>
//         <div> ${tarefa} </div>
//         <input type="button" value="x" data-indice = ${indice}>
//     `
//                                                                                                 // "data-(nome do indice)" - É uma propriedade/atribulo como o Id, mas que aceita números no nome)
//     document.getElementById('todoList').appendChild(item);
// }

const clear = () => {                                                                           //Limpa as tarefas da tela
    const todoList = document.getElementById('todoList');   
    while(todoList.firstChild){                                                                 //Enquanto existir o primeiro filho, remove o último filho
        todoList.removeChild(todoList.lastChild);
    }

}

const render = () => {                                                                          //Lê o banco de dados e Atualiza a tela
    clear();                                                                                    //Limpa a tela cada vez que o Render é chamado para não haver duplicações
    const banco = getBanco();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));               //Para cada item do banco, pega um item e o indice do array, e joga para a função 'criarItem()' informando seus parametro
}

const addTarefa = (evento) => {                                                                 //Recebe a tarefa digitada pelo usuário e add no Array (banco de dados)
    const tecla = evento.key;
    const texto = evento.target.value
    if(tecla == 'Enter' && texto != ''){
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status': ''});
        setBanco(banco);
        render();
        evento.target.value = ''
    }    
}
document.getElementById('newItem').addEventListener('keypress', addTarefa);


const removerItem = (indice) => {                                                               //Remove os Itens do banco de dados
    const banco = getBanco();
    banco.splice(indice, 1);                                                                    //splice recorta um array. (a partir, remove nº) no caso, ele próprio
    setBanco(banco);
    render();
}

const marcarItem = (indice) => {                                                                //Marca ou desmarca o checkbox das tarefas no banco de dados
    const banco = getBanco();
    banco[indice].status = banco[indice].status == '' ? 'checked' : '';
    setBanco(banco);
    render();
}

const clickItem = (evento) => {                                                                 //Verifica onde o usuário clicou e encaminha para a função determinada
    const elemento = evento.target;
    if(elemento.type == 'button'){
        const indice = elemento.dataset.indice;                                                 //dataset captura o npumero do indice de mesmo nome usado na função criarItem() 
        removerItem(indice);
    }else if(elemento.type == 'checkbox'){
        const indice = elemento.dataset.indice;
        marcarItem (indice);
    }
}
document.getElementById('todoList').addEventListener('click', clickItem);

render();
