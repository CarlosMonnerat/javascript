"use strict";
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
;
const d = new Date();
var cores;
(function (cores) {
    cores["branco"] = "#fff";
    cores["preto"] = "#000";
    cores["vermelho"] = "#f00";
    cores["verde"] = "#0f0";
    cores["azul"] = "#00f";
})(cores || (cores = {}));
;
var tipoUsuario;
(function (tipoUsuario) {
    tipoUsuario[tipoUsuario["user"] = 0] = "user";
    tipoUsuario[tipoUsuario["admin"] = 1] = "admin";
    tipoUsuario[tipoUsuario["super"] = 2] = "super";
})(tipoUsuario || (tipoUsuario = {}));
;
let tp = 1;
let tb = tipoUsuario.super;
console.log(tp);
console.log(tb);
