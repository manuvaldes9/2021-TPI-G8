const { sequelize } = require("../models");
const db = require("../models");
const usuarios = db.usuarios;
const Op = db.sequelize.Op;


exports.login = (req, res) => {
	var username = req.body.username;
	var password = req.body.password;
		const results= sequelize.query('SELECT * FROM usuarios WHERE usuario="'+username+'" AND contra="'+password+'"')
			.then(data => {
				if (JSON.stringify(data) != '[[],[]]') {
					req.session.loggedin = true;
					res.redirect('/home');
				} else {
					res.send('Incorrect Username and/or Password!');
				}
			})
				.catch(err => {
					console.log(err)
				});
}

