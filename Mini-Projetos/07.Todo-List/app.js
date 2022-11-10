'use strict';

let banco = [                                                /*Este Array funciona como um banco de dados que armazena as tarefas digitadas pelo usuário */
    {'tarefa':'Estudar JS', 'status': ''},
    {'tarefa':'Ler um Livro', 'status': 'checked'},
    {'tarefa':'Malhar', 'status': 'checked'},
    {'tarefa':'Trabalhar', 'status': ''}

]

const criarItem = (tarefa, status) => {                      /* Cria as tarefas dentro do DOM*/
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div> ${tarefa} </div>
        <input type="button" value="x">
    `
    document.getElementById('todoList').appendChild(item);
}

const render = () => {                                       /* Lê o banco de dados e Atualiza a tela */
    banco.forEach(item => criarItem(item.tarefa, item.status)); /*Para cada item do banco, pega um item e joga para a função 'criarItem()' informando seus parametros*/
    

}

render();