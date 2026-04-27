const express = require('express');
const router = express.Router();

const {
    getAllUsersController,
    addUserController
} = require('../controllers/userController')

router.get('/',getAllUsersController);
router.post('/',addUserController);

module.exports = router;