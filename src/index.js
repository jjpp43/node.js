const express = require('express');

const app = express();

let personRoute = require('./routes/person');

//Middleware
app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
})

app.use(personRoute);
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info('Server has started on ${PORT}'));

