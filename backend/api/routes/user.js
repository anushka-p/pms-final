const router = require("express").Router();
const {signup} =require('../controller/userController');

router.post('/signup',signup);

module.exports=router;