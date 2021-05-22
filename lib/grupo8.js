'use strict'
const fetch = require('node-fetch');

async function gN(url,res) {
    // console.log("hola martin")
    var datos = await fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            return data;
        });
    res = datos;
    return res;

    // const response = await fetch(url);
    // const data = await response.json();
    // console.log("1"+data);
    // return data;
}

const getNotificacion = async function (url, res) {
    res = await gN(url);
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