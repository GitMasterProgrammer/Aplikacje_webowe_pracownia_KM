import express from 'express';
import { promises as rs } from 'fs';


const router = express.Router();

router.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    const html_form = await rs.readFile('templates/form.html')
    res.end(html_form)
})

router.post('/', async (req, res) => {
    console.log(req.body);
    res.end()

})

export { router as contactRouter };