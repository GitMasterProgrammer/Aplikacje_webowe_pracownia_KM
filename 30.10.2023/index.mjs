
import express from 'express';
import { promises as rs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import {apiRouter} from './routes/api_route.mjs'
import {contactRouter} from './routes/contact_route.mjs'
import bodyParser from 'body-parser';
const port = 3000
const app = express()
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', apiRouter)

app.use('/static', express.static(path.join(__dirname, 'public/js')))

app.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    const html_main = await rs.readFile('templates/index.html')
    res.end(html_main)
})

app.use('/kontakt', contactRouter)







    /*router.get('/api/students/:id', async (req, res) => {
        
        res.setHeader("Content-Type", 'application/json')
        const id = req.params.id;
        var element_to_return = null;
        students.forEach(element => {
            console.log(element)
            if(element.id.toString() === id){
                element_to_return = element
            } 
        });

        if(element_to_return === null){
            res.statusCode = 404
            res.end('Nie ma takiego studenta')
        } else{
            res.statusCode = 200
            res.end(
                JSON.stringify({
                    "Error":404,
                    "Message": "Nie ma takiego ucznia"
                })
            )
        }

        res.end()

    })

    router.get('/api', async (req, res) => {
        res.statusCode = 200
        res.setHeader("Content-Type", 'text')
        const json_file = await rs.readFile('return.json'); 
        res.end(json_file)
    })

    router.get('/api/students', async (req, res) => {
        res.setHeader("Content-Type", 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(students))
    })

    app.get('/api/subjects', async (req, res) => {
        res.setHeader("Content-Type", 'application/json')
        res.statusCode = 200
        res.end(JSON.stringify(subjects))
    })

    router.get('/api/subjects/:id', async (req, res) => {
        
        res.setHeader("Content-Type", 'application/json')
        const id = req.params.id;
        var element_to_return = null;
        subjects.forEach(element => {
            console.log(element)
            if(element.id.toString() === id){
                element_to_return = element
            } 
        });

        if(element_to_return === null){
            res.statusCode = 404
            res.end(
                JSON.stringify({
                    "Error":404,
                    "Message": "Nie ma takiego przedmiotu"
                })
            )
        } else{
            res.statusCode = 200
            res.end(
                JSON.stringify(element_to_return)
            )
        }

        res.end()

    })

    
*/
    
    app.listen(port, function (err) {
        if (err) console.log(err);
        console.log("Server listening on PORT", port);
    });