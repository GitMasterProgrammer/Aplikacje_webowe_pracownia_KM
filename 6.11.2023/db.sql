
CREATE DATABASE IF NOT EXISTS school;
USE school;


CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    surname VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE contact (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(150) NOT NULL,
    subject VARCHAR(100) NOT NULL
);


INSERT INTO students (id, name, surname, email)
VALUES
    (1, 'Jan', 'Kowalski', 'jan.kowalski@example.com'),
    (2, 'Anna', 'Nowak', 'anna.nowak@example.com'),
    (3, 'Piotr', 'Wójcik', 'piotr.wojcik@example.com'),
    (4, 'Maria', 'Dąbrowska', 'maria.dabrowska@example.com'),
    (5, 'Andrzej', 'Lewandowski', 'andrzej.lewandowski@example.com'),
    (6, 'Katarzyna', 'Wojciechowska', 'katarzyna.wojciechowska@example.com'),
    (7, 'Michał', 'Kamiński', 'michal.kaminski@example.com'),
    (8, 'Magdalena', 'Kowalczyk', 'magdalena.kowalczyk@example.com'),
    (9, 'Tomasz', 'Zieliński', 'tomasz.zielinski@example.com'),
    (10, 'Alicja', 'Szymańska', 'alicja.szymanska@example.com');


CREATE TABLE subjects (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    hoursAWeek INT NOT NULL
);

INSERT INTO subjects (id, name, hoursAWeek)
VALUES
    (1, 'Matematyka', 4),
    (2, 'Fizyka', 3),
    (3, 'Chemia', 3),
    (4, 'Informatyka', 2),
    (5, 'Historia', 2),
    (6, 'Język angielski', 5),
    (7, 'Biologia', 3),
    (8, 'Geografia', 2),
    (9, 'Wychowanie fizyczne', 3),
    (10, 'Muzyka', 2);
