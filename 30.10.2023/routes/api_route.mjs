import express from 'express';
import { createConnection } from 'mysql2/promise';

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '_root123',
  database: 'school',
};

const router = express.Router();

router.get('/students/:id', async (req, res) => {
  const id = req.params.id;
  const connection = await createConnection(dbConfig);

  try {
    const [rows] = await connection.query('SELECT * FROM students WHERE id = ?', [id]);

    if (rows.length === 0) {
      res.status(404).json({ message: 'Nie ma takiego studenta' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  } 
  connection.end();
  
});

router.get('/students', async (req, res) => {
  const connection = await createConnection(dbConfig);

  try {
    const [rows] = await connection.query('SELECT * FROM students');
    res.status(200).json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  } 
    connection.end();
  
});

router.get('/subjects/:id', async (req, res) => {
  const id = req.params.id;
  const connection = await createConnection(dbConfig);

  try {
    const [rows] = await connection.query('SELECT * FROM subjects WHERE id = ?', [id]);

    if (rows.length === 0) {
      res.status(404).json({ message: 'Nie ma takiego przedmiotu' });
    } else {
      res.status(200).json(rows[0]);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Wystąpił błąd podczas pobierania danych' });
  } 
  connection.end();
  
});

export { router as apiRouter };