import { Login } from "./login.js";

const callback_ok = ()=>{
    alert("Login efetuado com sucesso.")
}

const callback_naook = ()=>{
    alert("Usuário ou senha incorretos!!!")
}

Login.login(callback_ok, callback_naook);