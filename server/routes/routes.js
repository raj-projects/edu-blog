const express = require('express');
const router = express.Router();

const Model = require('../models/model');

//POST method
// router.post('/post', (req,res) => {
// res.send('POST method of API called')
// })

//To fethch all the records [get] method
//refactored the logic to return the dynamic id based on res.send(req.params.id)
router.get('/getAll', (req, res) => {
  res.send('Fetch all records using getAll method');
});

//To fethch one record [get] based on the given ID
router.get('/getOne/:id', (req, res) => {
  // res.send('Fetch the record based on the given ID')
  res.send(req.params.id);
});

//Update the record [patch] based on the given ID
router.patch('/update/:id', (req, res) => {
  res.send('Update based on the given ID');
});

//Delete the record [delete] based on the given ID
router.delete('/delete/:id', (req, res) => {
  res.send('delete based on the given ID');
});

router.post('/post', async (req, res) => {
  const data = new Model({
    name: req.body.name,
    salary: req.body.salary,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(!200).json({ message: error.message });
  }
});

module.exports = router;
