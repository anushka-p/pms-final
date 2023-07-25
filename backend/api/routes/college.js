const { addCollegeDetails, getcollegebyid } = require("../controller/collegeController");

const router = require("express").Router();
router.post('/add-college-details/:user_id', addCollegeDetails);
router.get('/:user_id', getcollegebyid);
module.exports=router;