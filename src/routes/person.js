const express = require('express');
const router = express.Router();

router.get('/person', (req, res) => {
	res.send('You have requested person');
});

module.exports = router;