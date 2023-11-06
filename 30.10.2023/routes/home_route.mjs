import express from 'express';
import { promises as rs } from 'fs';



const router = express.Router();

router.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    const html_main = await rs.readFile('templates/index.html')
    res.end(html_main)
})


export { router as homeRouter };