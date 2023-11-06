
import express from 'express';
import { promises as rs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {apiRouter} from './routes/api_route.mjs'
import bodyParser from 'body-parser';
import { homeRouter } from './routes/home_route.mjs'; 
import { contactRouter } from './routes/contact_route.mjs';
const port = 3000
const app = express()
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);



app.use('/api', apiRouter)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'public/js')))
app.use('/kontakt', contactRouter);
app.use('/', homeRouter);


    
app.listen(port, function (err) {
        if (err) console.log(err);
        console.log("Server listening on PORT", port);
    });