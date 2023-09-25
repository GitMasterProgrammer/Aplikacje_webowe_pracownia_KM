const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 8888;

const requestListener = async function (req, res) {

    const htmlCode = await fs.readFile('index.html')
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(htmlCode);
    /*.then(contents => {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end(contents);
    })*/
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});