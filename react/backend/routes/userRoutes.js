//express import 
const express = require('express') ;
const userController = require('../controller/userController')
//express.Router()
const router = express.Router();

router.post('/register',userController.signUp) ;
router.post('/login',userController.login);

module.exports = router ;