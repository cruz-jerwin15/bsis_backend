const express = require('express');
const router = express.Router();

const {
    getAllStudentController,
    addStudentController
} = require('../controllers/studentController')

router.get('/',getAllStudentController);
router.post('/',addStudentController);

module.exports = router;