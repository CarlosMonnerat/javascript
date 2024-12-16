'use strict';

const openModal = () => document.getElementById('modal').classList.add('active');
const closeModal = () => document.getElementById('modal').classList.remove('active');

const tempClient = {
    nome: "Bruna",
    email: "brunar@gmail.com",
    celular: "21987643210",
    cidade: "Teresópolis"
}

//CRUD - create, read, update, delete
const createClient = (client) =>{
    const db_client = JSON.parse(localStorage.getItem('db_client'));
    db_client.push(client);
    localStorage.setItem("db_client", JSON.stringify(db_client));
}

//Eventos
document.getElementById('cadastrarCliente').addEventListener('click', openModal);
document.getElementById('modalClose').addEventListener('click', closeModal);