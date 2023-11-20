import express from 'express';
import { MongoClient } from 'mongodb';
import { promises as fs } from 'fs';
const dbName = "school";
const pass = "admin".toString();

const url = `mongodb+srv://admin:${pass}@cluster01.tmbhxm1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(url);

const router = express.Router();

router.get('/', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  try {
    const htmlForm = await fs.readFile('templates/form.html');
    res.end(htmlForm);
  } catch (error) {
    console.error(error);
    res.status(500).send('Wystapił błąd podczas odczytu formularza.');
  }
});

router.post('/', async (req, res) => {
  const { name, email, subject, message_content } = req.body;

  try {
    await client.connect();
    const database = client.db(dbName);
    const collection = database.collection('contacts');

    await collection.insertOne({
      name,
      email,
      subject,
      message_content,
    });

    res.status(200).send('Success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Wystąpił bład podczas zapisu danych.');
  } finally {
    await client.close();
  }
});

export { router as contactRouter };
