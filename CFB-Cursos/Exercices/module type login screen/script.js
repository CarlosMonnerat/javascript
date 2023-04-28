import { Login } from "./login.js";
import { Cxmsg } from "../Custom message box/msg.js";


const callback_ok = ()=>{
    
}

const callback_naook = ()=>{
    const config = {
        cor:"#800",
        tipo:"ok",
        texto_btn: null,
        comando_sn: null,
    }
    Cxmsg.mostrar(config,"Erro: 400531277", "Login não efetuado. Usuário ou senha incorretos!!!");
}

Login.login(callback_ok, callback_naook);