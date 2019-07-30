const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/token', (req, res) => {
	const mockedUsername = 'Numenu';
	const mockedPassword = '123123';

	const {usuario, senha} = req.body;
	if(usuario === mockedUsername && senha === mockedPassword){
		var token = jwt.sign({ usuario, senha }, process.env.SECRET);
		res.status(200).send({ auth: true, token });
	}
	else{
		res.status(500).send('Login inválido!');
	}
});

module.exports = router;