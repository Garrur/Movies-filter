const express = require('express');
const router = express.Router();
const movieController = require('../controller/datacontroller');

router.get('/movies', movieController.getMovies);
router.post('/movies', movieController.addMovie);

module.exports = router;
