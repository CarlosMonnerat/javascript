'use strict';

let banco = [                                                        /*Este Array funciona como um banco de dados que armazena as tarefas digitadas pelo usuário */
    {'tarefa':'Estudar JS', 'status': ''},
    {'tarefa':'Ler um Livro', 'status': 'checked'},
    {'tarefa':'Malhar', 'status': 'checked'},
    {'tarefa':'Trabalhar', 'status': ''}

]

const criarItem = (tarefa, status) => {                              /*Cria as tarefas dentro do DOM*/
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status}>
        <div> ${tarefa} </div>
        <input type="button" value="x">
    `
    document.getElementById('todoList').appendChild(item);
}

const clear = () => {                                               /*Limpa as tarefas da tela */
    const todoList = document.getElementById('todoList');   
    while(todoList.firstChild){                                     /*Enquanto existir o primeiro filho, remove o último filho */
        todoList.removeChild(todoList.lastChild);
    }

}

const render = () => {                                              /*Lê o banco de dados e Atualiza a tela */
    clear();                                                        /*Limpa a tela cada vez que o Render é chamado para não haver duplicações */
    banco.forEach(item => criarItem(item.tarefa, item.status));     /*Para cada item do banco, pega um item e joga para a função 'criarItem()' informando seus parametros*/


}

const addTarefa = (evento) => {                                                     /*Recebe a tarefa digitada pelo usuário e add no Array */
    const tecla = evento.key;
    if(tecla == 'Enter'){
        banco.push({'tarefa':'Desenhar', 'status': ''})
    }
    render();
}
document.getElementById('newItem').addEventListener('keypress', addTarefa);

render();
