const express = require('express');
const router = express.Router();

//POST method
router.post('/post', (req, res) => {
  res.send('POST method of API called');
});

//To fethch all the records [get] method
router.get('/getAll', (req, res) => {
  res.send('Fetch all records using getAll method');
});

//To fethch one record [get] based on the given ID
router.get('/getOne/:id', (req, res) => {
  res.send(`Fetch the record based on the given ${req.params.id}`);
});

//Update the record [patch] based on the given ID
router.patch('/update/:id', (req, res) => {
  res.send(`Update based on the given ${req.params.id}`);
});

//Delete the record [delete] based on the given ID
router.delete('/delete/:id', (req, res) => {
  res.send(`delete based on the given ${req.params.id}`);
});

module.exports = router;
