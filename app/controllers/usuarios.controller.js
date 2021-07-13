const db = require("../models");
const usuarios = db.usuarios;
const Op = db.sequelize.Op;



exports.findAll = (req, res) => {
    usuarios.findAll({ attributes: ['usuario','contra'] })
    .then(data => {
		res.json(data);
    // const consulta = JSON.stringify(data); //Esto nos devuelve el resultado de la consulta escrito como JSON pero en formato STRING
    // console.log(JSON.parse(consulta)) //Aca transformo el resultado de la consulta a JSON
    })
    .catch(err => {
    console.log(err)
    });
};

exports.login = (req, res) => {
	var username = req.body.username;
	var password = req.body.password;
	if (username && password) {
		db.usuarios.findOne({ attributes: [username,password]}), function(error, results, fields) {
			if (results.length = 1) {
				req.session.loggedin = true;
				req.session.username = username;
				res.redirect('/home');
			} else {
				res.send('Incorrect Username and/or Password!');
			}			
			res.end();
		};
	} else {
		res.send('Please enter Username and Password!');
		res.end();
	}
}

