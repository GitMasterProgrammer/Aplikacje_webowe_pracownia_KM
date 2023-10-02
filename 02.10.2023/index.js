const http = require('http');
const rs = require('fs').promises;

const host = '127.0.0.1'
const port = 8080

const server = http.createServer( async (req, res) => {
   
    url = req.url;
    method = req.method;
    if(url === '/'){
        const html = await rs.readFile('templates/index.html')
        res.statusCode = 200
        res.setHeader("Content-Type", 'text/html')
        res.end(html)

    } else if(url === '/dziekujemy'){
        const html = await rs.readFile('templates/thanks.html')
        res.statusCode = 200
        res.setHeader("Content-Type", 'text/html')
        res.end(html)
        
    } else if(url === '/kontakt' && method === 'POST'){
        const body = []

        req.on('data', (chunk) => {
            console.log(chunk.toString())
            body.push(chunk)
        })
        

        req.on('end', async () => {
            const bodyForm = Buffer.concat(body).toString()
            const message = bodyForm.split('=')[1]

            await rs.writeFile(`contact/message-${Date.now().toString()}.txt`, message)
            res.statusCode = 302
            res.setHeader('Location', '/dziekujemy')
            return res.end()
        });
    }
     else if(url === '/api'){
        res.statusCode = 200
        class ClassSample {
            constructor(name, message) {
              this.name = name;
              this.message = message;
            }
        }

        const myObject1 = new ClassSample("costam", "maka paka");
        const myObject2 = new ClassSample("costam2", "maka paka2");
        const json = {
            objects_array: [
                myObject1,
                myObject2
            ],
        }
        res.setHeader("Content-Type", 'application/json')
        res.write(JSON.stringify(json))
        res.end()
    } 
    else {
        res.statusCode = 404
        res.setHeader("Content-Type", 'application/json')
        
        const json = {
            error: "404",
            content : "Sr its 404 page"
        }

        res.write(JSON.stringify(json))
        res.end()
    }
})

server.listen(
    port, host, () => {
        console.log(`Server running at http://${host}:${port}`)
    }
)