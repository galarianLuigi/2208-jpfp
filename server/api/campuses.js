const router = require('express').Router();
const Campus = require('../db');

router.get('/campuses', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll();
    res.json(campuses);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
