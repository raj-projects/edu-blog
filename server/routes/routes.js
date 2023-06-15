const express = require('express');
const userModel = require('../models/user.model');
const router = express.Router();

router.get('/login', async (req, res) => { })
    
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const check = await userModel.findOne({ email: email });

    if (check) {
        res.json({data : email, message: 'exist'})
    } else {
      res.json('notexist');
    }
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = router;
