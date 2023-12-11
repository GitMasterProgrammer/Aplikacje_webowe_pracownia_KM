const express = require('express');

const routerMain = require('./routes/routes.js').routerMain
const port = 3000

const app = express();

app.use(express.json());
app.use('/', routerMain)

app.listen(port, () => {
    console.log("App listening on port: "+port)  
})