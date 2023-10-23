import express from 'express'
import { promises as rs } from 'fs';
const students = [
    { "id": 1, "name": "Jan", "surname": "Kowalski", "email": "jan.kowalski@example.com" },
    { "id": 2, "name": "Anna", "surname": "Nowak", "email": "anna.nowak@example.com" },
    { "id": 3, "name": "Piotr", "surname": "Wójcik", "email": "piotr.wojcik@example.com" },
    { "id": 4, "name": "Maria", "surname": "Dąbrowska", "email": "maria.dabrowska@example.com" },
    { "id": 5, "name": "Andrzej", "surname": "Lewandowski", "email": "andrzej.lewandowski@example.com" },
    { "id": 6, "name": "Katarzyna", "surname": "Wojciechowska", "email": "katarzyna.wojciechowska@example.com" },
    { "id": 7, "name": "Michał", "surname": "Kamiński", "email": "michal.kaminski@example.com" },
    { "id": 8, "name": "Magdalena", "surname": "Kowalczyk", "email": "magdalena.kowalczyk@example.com" },
    { "id": 9, "name": "Tomasz", "surname": "Zieliński", "email": "tomasz.zielinski@example.com" },
    { "id": 10, "name": "Alicja", "surname": "Szymańska", "email": "alicja.szymanska@example.com" }
  ]
  
  
const subjects = [
    { "id": 1, "name": "Matematyka", "hoursAWeek": 4 },
    { "id": 2, "name": "Fizyka", "hoursAWeek": 3 },
    { "id": 3, "name": "Chemia", "hoursAWeek": 3 },
    { "id": 4, "name": "Informatyka", "hoursAWeek": 2 },
    { "id": 5, "name": "Historia", "hoursAWeek": 2 },
    { "id": 6, "name": "Język angielski", "hoursAWeek": 5 },
    { "id": 7, "name": "Biologia", "hoursAWeek": 3 },
    { "id": 8, "name": "Geografia", "hoursAWeek": 2 },
    { "id": 9, "name": "Wychowanie fizyczne", "hoursAWeek": 3 },
    { "id": 10, "name": "Muzyka", "hoursAWeek": 2 }
  ]

const router = express.Router()

router.get('/students/:id', async (req, res) => {
        
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

router.get('/', async (req, res) => {
    res.statusCode = 200
    res.setHeader("Content-Type", 'text')
    const json_file = await rs.readFile('return.json'); 
    res.end(json_file)
})

router.get('/students', async (req, res) => {
    res.setHeader("Content-Type", 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(students))
})

router.get('/subjects', async (req, res) => {
    res.setHeader("Content-Type", 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify(subjects))
})

router.get('/subjects/:id', async (req, res) => {
    
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
export { router as apiRouter}