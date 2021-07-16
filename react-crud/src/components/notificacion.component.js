import React from "react";
const empresas = require('dacs-empresas');
const api_login = 'https://cli-serv-grupo1.herokuapp.com/api/auth/login'



localStorage.clear();

function prueba() {
  empresas.loginMinisterio(api_login, "benjamin.kugler1996@gmail.com","123456").then().then(tkn => localStorage.setItem("token", tkn));
}

const api_notificacion = 'https://60a829368532520017ae5a5f.mockapi.io/notificaciones';

function notificar () {
        empresas.getNotificacion(api_notificacion,"9a9c8b7e-c249-4cb5-a171-655502d0c89e").then().then(not => localStorage.setItem("notificacion",JSON.stringify(not)));
        const notif = JSON.parse(localStorage.getItem("notificacion"));
        return notif;
    }       

export const NotificacionButton = () => {
    const {notif} = notificar();
  return <button  class="btn btn-outline-secondary btn-sm"  /* onClick={() => notif()} */>
      Verif condicion
      </button>;
};
export default NotificacionButton;