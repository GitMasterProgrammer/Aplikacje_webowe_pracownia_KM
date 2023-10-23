const express = require('express') 
const rs = require('fs').promises
const path = require('path');

const app = express()
const host = 'localhost'
const port = 3000
app.use('/static', express.static(path.join(__dirname, 'public/js')))

app.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text/html')
    const html_main = await rs.readFile('templates/index.html')
    res.end(html_main)
})

app.route('/kontakt')
    .get(async (req, res) => {
        res.statusCode = 200
        res.setHeader("Content-Type", 'text/html')
        const html_form = await rs.readFile('templates/form.html')
        res.end(html_form)
    })

    .post((req, res) => {
        console.log('Form send')  
    })

app.listen(port, () => {
    console.log(`Example app listening on port ${host}:${port}`)
})