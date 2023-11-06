import express from 'express';
import { promises as rs } from 'fs';
import { createConnection } from 'mysql2/promise';


const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '_root123',
  database: 'school',
};

const router = express.Router();

router.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    const html_form = await rs.readFile('templates/form.html')
    res.end(html_form)
})

router.post('/', async (req, res) => {
    const msg_body = [];

    const { name, email, subject, message_content } = req.body;
    const connection = await createConnection(dbConfig);

    try {

    const query = 'INSERT INTO contact (name, email, subject, message_content) VALUES (?, ?, ?, ?)';
    await connection.execute(query, [name, email, subject, message_content]);
    res.status(200).send('Success');
    } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while saving data.');
    } finally {
    connection.end(); 
    }

    
    /*req.on('data', (chunk) => {
        
        msg_body.push(chunk)
        
    })

    req.on('end', async ()=>{
        const connection = await createConnection(dbConfig);
        
        const bodyForm = Buffer.concat(msg_body).toString()

        
    })*/

})

export { router as contactRouter };