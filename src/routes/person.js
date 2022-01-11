const express = require('express');
const router = express.Router();

//QueryString => query property on the request object
//This allows urls like localhost:3000/person?name=john&age=20
router.get('/person', (req, res) => {
	if(req.query.name) {
		res.send('You have requested person ${req.query.name}');
	} else {
		res.send('You have requested person');
	}
});

//Params property on the request object
//This allows urls like localhost:3000/person/thomas
router.get('/person/:name', (req, res) => {
	res.send('You have requested a person ${req.params.name}');
})



module.exports = router;