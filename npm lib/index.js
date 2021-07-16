'use strict'
const fetch = require('node-fetch');

async function getNotificacion(url, token, res) {
	var sal;
	// if (typeof id == 'undefined') { 	//Si el id no fue ingresado, obtengo todas las notificaciones
	// 	var datos = await fetch(url)
	// 		.then(response => response.json())
	// 		.then(data => {
	// 			return data;
	// 		});
	// 	res = await datos;
	// 	return res;
	// } else { 							// Si el id fue ingresado obtengo la notificación con ese ID
		var datos = await fetch(url + "?token=" + token)
			.then(response => response.json())
			.then(data => {
				return data;
			});
		if (datos[0] == undefined) {
			sal = "No hay notificaciones";
		} else {
			sal = datos[0].descripcion;
		}
		return sal;
	// }
	// Buscar notificación por ID puede ser útil si el usuario quiere ver en detalle una notificación específica
}

const postRegimen = function (url, cuerpo, token) {
	fetch(url, {
		method: 'POST', //acá le digo que lo que quiero hacer es un post
		body: JSON.stringify(cuerpo), //acá paso lo que me ingresan como json a texto
		headers: { 'Content-Type': 'application/json',
					'Authorization': ('Bearer '+token) } //acá le aviso que lo que le paso como texto es un json
	}) //el procedimiento de antes lo hago porque en la documentación lo hacen así
		.then(res => res.json())
		.then(json => {
			console.log("Se cargó correctamente el siguiente registro: ");
			console.log(json)
		})
		.catch(err => console.log(err));
}

const generarRegimen = function (anio, mes, registros) {
	//Inicializo la variable sal
	var sal = {};

	// Control sobre el año, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	if (2020 > anio || anio > 9999) {
		console.error("El año ingresado es incorrecto");
		return undefined;
	} else {
		anio = anio.toString()
	}

	// Control sobre el mes, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	if (mes < 1 || mes > 12) {
		console.error("El mes ingresado es incorrecto");
		return undefined;
	} else {
		mes = mes.toString()
	}

	// // Control sobre la fecha de carga, si es incorrecta hago que la función devuelva "undefined" que tengo entendido que es como vacío
	// if (typeof fecha_carga == 'undefined') {
	// 	fecha_carga = new Date().getTime()		// antes en vez de .getTime() iba .toISOString();
	// } else {
	// 	if (typeof fecha_carga != 'string') {
	// 		console.error("La fecha debe ser un string");
	// 		return undefined;
	// 	} else {
	// 		if (Date(fecha_carga).getFullYear() < 2021) {
	// 			console.error("Por favor revise la fecha de carga");
	// 			return undefined;
	// 		}
	// 	}
	// }

	// // Control sobre el cuit, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	// if (inputCuit < 9999999999 || inputCuit > 99999999999 || inputCuit.length > 11) {
	// 	console.error("Por favor revise el CUIT, este debe tener al 11 cifras sin espacios, puntos o guiones.");
	// 	return undefined;
	// } else {
	// 	inputCuit = parseInt(inputCuit);
	// }

	// Control sobre el nombre de la empresa, si es incorrecto hago que la función devuelva "undefined" que tengo entendido que es como vacío
	// if (typeof nombre_empresa != 'string') {
	// 	console.error("Por favor revise el nombre de la empresa");
	// 	return undefined;
	// }

	// Cargo los valores que fueron revisados y corregidos previamente a la variable de salida en forma de json.
	sal = {
		// "business": nombre_empresa // antes teníamos como está abajo
		/*"infoEmpresa": {
			"cuit": inputCuit,
			"razon_social": nombre_empresa
		},
		*/
		"productsList": registros,	// "listaRegistro"
		// "date_added": fecha_carga, 	// "date_upload"
		// "dateLimit": 10, // "day_limit",
		"period": { // "periodo"
			"year": anio,
			"month": mes
		}
		
	};
	return sal;
};

const cargarRegistro = function (reg, listaReg) {
	if (typeof listaReg == 'undefined') {
		listaReg = [reg];
	} else {
		listaReg.push(reg);
	}
	return listaReg;
}

const generarRegistro = function (id, denom, ean, precioUn, unidadMed, cantProd, cantVend) {

	if (typeof denom != 'string') {
		console.error("Compruebe que la denominacion ingresada sea correcta");
		return undefined;
	}

	if ((typeof ean != 'number') || (ean > 9999999999999) || (ean < 999999999999)) {
		console.error("Compruebe que el codigo EAN tenga el formato correcto");
		return undefined;
	}

	if (typeof precioUn != 'number') {
		console.error("Compruebe que el precio ingresado sea correcto");
		return undefined;
	}

	if (typeof unidadMed != 'string') {
		console.error("Compruebe que la unidad medida ingresada sea correcta");
		return undefined;
	}

	if ((typeof cantVend != 'number') || (cantVend < 0)) {
		console.error("Compruebe que la cantidad vendida ingresada sea correcta");
		return undefined;
	}

	if (typeof cantProd != 'number' || (cantProd < 0)) {
		console.error("Compruebe que la cantidad producida ingresada sea correcta");
		return undefined;
	}

	if (typeof id != 'string') {
		console.error("El id debe ser un string");
		return undefined;
	} 

	const sal = {
		"_id" : id, // Nosotros inicialmente no teníamos este valor, no sabemos de dónde sale, pero es un string
		"productName": denom, //"denominacion"
		"eanCode": ean, // "codigo_ean"
		"price": precioUn, // "precio_unidad"
		"unit": unidadMed, // "unidad_medida"
		"quantityProduced": cantProd, // "cantidad_prod"
		"quantitySold": cantVend, // "cantidad_vend"
		"report":{} //no cargo nada, porque todavía no se que va
					// Ellos en su descripción de report tienen:
					// Contains the information about the report in which this product has been added.
	}

	return sal;
}


const loginMinisterio = async function (url, email, pass) {
	const body = { email: email, password: pass };
 
	const response = await fetch(url, {
			method: 'post',
			body:    JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		});
	const sal = await response.json();
	return sal.token;
}

const registroMinisterio = async function (url, email, pass, nombre) {
	const body = { email: email, password: pass, name: nombre };
	const result = await fetch(url, {
			method: 'post',
			body:    JSON.stringify(body),
			headers: { 'Content-Type': 'application/json' },
		})
	const sal = await result.json();
	return sal.token;
}


module.exports = {
	getNotificacion: getNotificacion,
	postRegimen: postRegimen,
	loginMinisterio: loginMinisterio,
	generarRegimen: generarRegimen,
	generarRegistro: generarRegistro,
	cargarRegistro: cargarRegistro,
	registroMinisterio: registroMinisterio
	// registrarEmpresa: registrarEmpresa
}