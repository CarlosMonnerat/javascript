'use strict';

const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "Helena",
    email: "helenam@gmail.com",
    celular: "21987643210",
    cidade: "Teresópolis"
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_Client')) ?? [];
const setLocalStorage = (dbClient) => localStorage.setItem("db_Client", JSON.stringify(dbClient));

// CRUD - create, read, update, delete

const createClient = (client) =>{
    const dbClient = getLocalStorage();
    dbClient.push(client);
    setLocalStorage(dbClient);    
}

const readClient = () => getLocalStorage();


//Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);