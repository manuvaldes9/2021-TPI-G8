'use strict'
const fetch = require('node-fetch');



async function gN(url){
   // console.log("hola martin")
   // var datos = 
  
   //await fetch(url)
   // .then(response => response.json());

   //.then(function(data){return (data)})

   const response = await fetch(url);
   const data = await response.json();
   const str = JSON.stringify(data);
   return str
 
   
   
    
}

const getNotificacion =  async function (url,res) {
    try {
        await gN(url).then(sal=> res.json(sal));
    } 
    catch (error) {
        console.log("error");
    }
}

const postRegimen = function() {
    console.log("majo")

}
const loginMinisterio = function() {
    console.log("majo 2")
}
module.exports = {
    getNotificacion: getNotificacion,
    postRegimen: postRegimen,
    loginMinisterio: loginMinisterio
}