const router = require("express").Router();
const {signup, login, EmailExists} =require('../controller/userController');
router.post('/signup',signup);
router.post('/login', login);
router.get('/checkmail', EmailExists);
module.exports=router;