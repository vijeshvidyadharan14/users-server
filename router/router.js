const express = require('express')
const userController = require('../controllers/userController')

const router = new express.Router()

// register post
router.post('/register',userController.registerController)

// login post
router.post('/login',userController.loginController)

// login get
router.get('/all-users',userController.getUsersController)

// login get
router.post('/one-user',userController.getOneUserController)


module.exports = router;
