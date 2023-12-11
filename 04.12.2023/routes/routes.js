
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const express = require('express');

router = express.Router()

router.post('/:table', async (req, res) => {
    const { table } = req.params;
    const data = req.body;
    const record = await prisma[table].create({
      data,
    });
    res.json(record);
  });
  
router.get('/:table', async (req, res) => {
    const { table } = req.params;
    const records = await prisma[table].findMany();
    res.json(records);
});
  
router.get('/:table/:id', async (req, res) => {
    const { table, id } = req.params;
    const record = await prisma[table].findUnique({
      where: { id: Number(id) },
    });
    res.json(record);
});
  
router.put('/:table/:id', async (req, res) => {
    const { table, id } = req.params;
    const data = req.body;
    const record = await prisma[table].update({
      where: { id: Number(id) },
      data,
    });
    res.json(record);
});
  
router.delete('/:table/:id', async (req, res) => {
    const { table, id } = req.params;
    const record = await prisma[table].delete({
      where: { id: Number(id) },
    });
    res.json(record);
});
  
module.exports = {
  routerMain: router
}