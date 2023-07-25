const collegeServices = require("../services/collegeServices");
const addCollegeDetails = async (req, res) => {
    try{
const body= req.body;
const user_id = req.params.user_id;
const updatedbody = { ...body,user_id };
const updatedinfo = await collegeServices.addCollege(updatedbody);
return res.status(200).json({
    data: updatedinfo,
    message: 'College details updated.'
  });
    }catch(error)
    {
      console.error('Error adding portfolio data:', error);
      return res.status(500).json({
        message: 'Internal Server Error',
      });
    }
}
const getcollegebyid = async (req,res)=>{
    try{
    const user_id = req.params.user_id;
    const college = await collegeServices.collegebyuserid(user_id);
    console.log("cccccccccccccc",college);
    if(college.message){
        res.json({message : college.message})
    }
    else{
        return res.status(200).json({
            data: college,
          });
    }

    }catch (error) {
        console.error('Error fetching college data:', error);
        return res.status(500).json({
          message: 'Internal Server Error',
        });
      }
}
module.exports={addCollegeDetails, getcollegebyid}