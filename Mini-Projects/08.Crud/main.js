'use strict';

const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "Carlos",
    email: "carlosh@gmail.com",
    celular: "21987643210",
    cidade: "Teresópolis"
};

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_Client", JSON.stringify(dbClient));

// CRUD - create, read, update, delete
const createClient = (client) => {
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);    
};

const readClient = () => getLocalStorage();

const updateClient = (index, client) => {
    const dbClient = readClient();
    dbClient[index] = client;
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
const saveClient = () => {
    if(isValidFields()){
        alert('cadastrando cliente');
    }
};

// EVENTOS
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('salvar').addEventListener('click', saveClient);