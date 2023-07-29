const router = require("express").Router();
const {addPortfolio, getPortfolio1,addupdatedPortfolio, getallStudents,getStudentName} =require('../controller/studentController');
router.post('/add-portfolio', addPortfolio);
router.get('/update-portfolio/:user_id', getPortfolio1);
router.post('/add-updated-portfolio/:user_id', addupdatedPortfolio);
router.get('/getall/:user_id', getallStudents);
router.get('/get-name/:user_id', getStudentName);
module.exports=router;