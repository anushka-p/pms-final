
const { addCollegeDetails, getcollegebyid, getStudentbyCollegeid, getStudentsHavingInternships} = require("../controller/collegeController");


const router = require("express").Router();
router.post('/add-college-details/:user_id', addCollegeDetails);
router.get('/:user_id', getcollegebyid);

router.get('/get-all-students/:user_id',getStudentbyCollegeid );
router.get('/get-all-internships/:user_id',getStudentsHavingInternships );

module.exports=router;