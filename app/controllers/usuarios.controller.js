const { sequelize } = require("../models");
const db = require("../models");
const usuarios = db.usuarios;
const Op = db.sequelize.Op;



// exports.findAll = (req, res) => {
    
// 	// usuarios.findOne({ 
// 	// 		attributes: [usuario,contra], 
// 	// 		where: {
// 	// 			usuario : 'usuario',
// 	// 			contra : 'probando123',
// 	// 		},
// 	// })
// 	.then(data => {
// 			res.json(data);
// 		})
// 		.catch(err => {
// 		console.log(err)
// 		});
// };

exports.login = (req, res) => {
	var username = req.body.username;
	var password = req.body.password;
	// if (username && password) {
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

// else {
// 	res.send('Please enter Username and Password!');
// 	res.end();
// } 
			// }			
			// res.end();
	// } else {
	// 	res.send('Please enter Username and Password!');
	// 	res.end();
	// }
}

