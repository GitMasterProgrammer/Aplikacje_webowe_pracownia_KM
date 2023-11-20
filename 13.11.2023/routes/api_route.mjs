import express from 'express';
import { MongoClient } from 'mongodb';
import { promises as fs } from 'fs';

const filePath = '.env';

const jsonObject = await fs.readFile(filePath);

const envConfig = JSON.parse(jsonObject.toString())

const dbName = envConfig.dbName;
const pass = envConfig.password;
const user = envConfig.userName;

const url = `mongodb+srv://${user}:${pass}@cluster01.tmbhxm1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const router = express.Router();

router.get('/', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text');
  const jsonFile = await fs.readFile('return.json');
  res.end(jsonFile);
});

router.get('/students/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('students');

    const student = await collection.findOne({ id });

    if (!student) {
      res.status(404).json({ message: 'Nie ma takiego studenta' });
    } else {
      res.status(200).json(student);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  } finally {
    await client.close();
  }
});

router.get('/students', async (req, res) => {
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('students');

    const students = await collection.find().toArray();

    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  } finally {
    await client.close();
  }
});

router.get('/subjects/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('subjects');

    const subject = await collection.findOne({ id });

    if (!subject) {
      res.status(404).json({ message: 'Nie ma takiego przedmiotu' });
    } else {
      res.status(200).json(subject);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  } finally {
    await client.close();
  }
});

router.get('/subjects', async (req, res) => {
  
  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('subjects');

    const subjects = await collection.find().toArray();

    if (!subjects) {
      res.status(404).json({ message: 'Nie ma takiego przedmiotu' });
    } else {
      res.status(200).json(subjects);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  } finally {
    await client.close();
  }
});

export { router as apiRouter };
