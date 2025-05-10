'use strict';

const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = () => {
    clearFields();
    document.getElementById('modal').classList.remove('active');
}

// const tempClient = {
//     nome: "Carlos",
//     email: "carlosh@gmail.com",
//     celular: "21987643210",
//     cidade: "Teresópolis"
// };

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_Client", JSON.stringify(dbClient));

// CRUD - create, read, update, delete
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);    
};

const readClient = () => getLocalStorage();

const updateClient = (index, upClient) => {
    const dbClient = readClient();
    dbClient[index] = upClient;
    setLocalStorage(dbClient);
};

const deleteClient = (index) => {
    const dbClient = readClient();
    dbClient.splice(index, 1);
    setLocalStorage(dbClient);
};

// INTERAÇÃO COM O DOM
const isValidFields = () => {
    return document.getElementById('form').reportValidity();
};

const createRow = (client) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" class="button green">editar</button>
            <button type="button" class="button red">excluir</button>
        </td>
    `
    document.querySelector('#tableClient > tbody').appendChild(newRow);
};

const updateTable = () => {
    clearTable();
    const dbClient = readClient();
    dbClient.forEach(createRow);
};

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field');
    fields.forEach(element => element.value = "");
};

const saveClient = () => {
    if(isValidFields()){
        const client = {
            nome: document.getElementById('nome').value,
            email: document.getElementById('email').value,
            celular: document.getElementById('celular').value,
            cidade: document.getElementById('cidade').value
        };
        createClient(client);
        clearFields();
        alert('Cliente cadastrado com sucesso!!!');
    };
};

updateTable();

// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveClient);
document.getElementById('cancelar').addEventListener('click', closeModal);
