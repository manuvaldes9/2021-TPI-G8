'use strict'
const fetch = require('node-fetch');

async function getNotificacion(url,id,res) {
    var datos = await fetch(url+"/"+id)
        .then(response => response.json())
        .then(data => {
            return data;
        });
    res = datos;
    return res;
}

const postRegimen = function () {
    console.log("majo")

}
const loginMinisterio = function () {
    console.log("majo 2")
}
module.exports = {
    getNotificacion: getNotificacion,
    postRegimen: postRegimen,
    loginMinisterio: loginMinisterio
}