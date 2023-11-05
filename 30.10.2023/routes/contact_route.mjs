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

router.post('/', (req, res) => {
    const msg_body = []
    req.on('data', (chunk) => {
        
        msg_body.push(chunk)
        
    })

    req.on('end', async ()=>{
        const bodyForm = Buffer.concat(msg_body).toString()
    })


})

export { router as contactRouter };