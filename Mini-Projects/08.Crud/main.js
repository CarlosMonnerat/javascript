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

const createRow = (client, index) => {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${client.nome}</td>
        <td>${client.email}</td>
        <td>${client.celular}</td>
        <td>${client.cidade}</td>
        <td>
            <button type="button" id="edit-${index}" class="button green">Editar</button>
            <button type="button" id="delete-${index}" class="button red">Excluir</button>
        </td>
    `
    document.querySelector('#tableClient > tbody').appendChild(newRow);
};

const clearTable = () => {
    const rows = document.querySelectorAll('#tableClient > tbody tr');
    rows.forEach(element => element.parentNode.removeChild(element));
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
        const index = document.getElementById('nome').dataset.index;
        if(index == 'new'){
            createClient(client);
            clearFields();
            updateTable();
            alert('Cliente cadastrado com sucesso!!!');
        }else{
            updateClient(index, client);
            updateTable();
            closeModal();
            alert('Cliente editado com sucesso!');
        };        
    };
};

const fillFields = (client) => {
    document.getElementById('nome').value = client.nome;
    document.getElementById('email').value = client.email;
    document.getElementById('celular').value = client.celular;
    document.getElementById('cidade').value = client.cidade;
    document.getElementById('nome').dataset.index = client.index;

};

const editClient = (index) => {
    const client = readClient()[index];
    client.index = index;
    fillFields(client);
    openModal();
};

const editDelete = (event) => {
    if(event.target.type == 'button'){
        const [action, index] = event.target.id.split('-');
        if(action == 'edit'){
            editClient(index);
        }else{
            const client = readClient()[index];
            const response = confirm(`Deseja realmente excluir o cliente ${client.nome}`);
            if(response){
                deleteClient(index);
                updateTable();
            };    
        };
    };   
};

updateTable();

// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveClient);
document.getElementById('cancelar').addEventListener('click', closeModal);
document.querySelector('#tableClient > tbody').addEventListener('click', editDelete);
