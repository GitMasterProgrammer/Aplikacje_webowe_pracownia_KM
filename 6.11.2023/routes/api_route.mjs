import express from 'express';
import { PrismaClient } from '@prisma/client';
import { promises as fs } from 'fs';

const prisma = new PrismaClient();

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
    const student = await prisma.students.findUnique({
      where: { id },
    });

    if (!student) {
      res.status(404).json({ message: 'Nie ma takiego studenta' });
    } else {
      res.status(200).json(student);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  }
});

router.get('/students', async (req, res) => {
  try {
    const students = await prisma.students.findMany();
    res.status(200).json(students);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  }
});

router.get('/subjects/:id', async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const subject = await prisma.subjects.findUnique({
      where: { id:id },
    });

    if (!subject) {
      res.status(404).json({ message: 'Nie ma takiego przedmiotu' });
    } else {
      res.status(200).json(subject);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  }
});

export { router as apiRouter };
