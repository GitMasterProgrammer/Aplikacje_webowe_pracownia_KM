import express from 'express';
import { promises as fs } from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '_root123',
  database: 'school',
};

const router = express.Router();

router.get('/', async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  try {
    const htmlForm = await fs.readFile('templates/form.html');
    res.end(htmlForm);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while reading the HTML form.');
  }
});

router.post('/', async (req, res) => {
  const { name, email, subject, message_content } = req.body;

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        subject,
        message_content,
      },
    });
    res.status(200).send('Success');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error occurred while saving data.');
  }
});

export { router as contactRouter };
