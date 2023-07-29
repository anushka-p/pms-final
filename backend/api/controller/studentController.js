const bcrypt = require("bcrypt");
const verifyToken = require("../../middleware/verifyToken");
const jwt = require("jsonwebtoken");
const studentServices = require("../services/studentServices");
const userServices = require("../services/userServices");
const addPortfolio = async (req, res) => {
    try {
      const body = req.body;
  
      // Step 1: Check if the college exists and get the cid
      const collegeResult = await studentServices.checkCollege(body);
  
      if (collegeResult.rowCount === 0) {
        return res.status(200).json({
          exists: false,
          message: "College name not registered.....",
        });
      }
  
      const cid = collegeResult.rows[0].cid;
      // Step 2: Insert the portfolio data into the database with the obtained cid
      const portfolioData = { ...body, cid };
      const createPortfolioResult = await studentServices.createPortfolio(portfolioData);
  
      return res.status(200).json({
        exists: true,
        data: createPortfolioResult,
      });
    } catch (error) {
      console.log("Error submitting portfolio:", error);
      return res.status(500).json({
        message: "Database connection error.......",
      });
    }
  };
 

const getPortfolio1 = async (req, res) => {
  try {
    const user_id = req.params.user_id;
    console.log(user_id);
    const portfolio = await studentServices.getPortfoliobyuserid(user_id);
    console.log(portfolio);
    return res.status(200).json({
      portfolio: portfolio,
      message: 'All details from database',
    });
  } catch (error) {
    console.error('Error fetching portfolio data:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
const getallStudents = async (req, res)=>{
  try{
        const user_id = req.params.user_id;
        const studentdata = await studentServices.getstudentdata(user_id);
        console.log("ssssssss",studentdata);
        if(studentdata.message){
          res.json({message : studentdata.message})
      }
      else{
          return res.status(200).json({
              data: studentdata,
            });
      }
      } catch (error) {
        console.error('Error fetching user portfolio data:', error);
        return res.status(500).json({
          message: 'Internal Server Error',
        });
      }
} ;
const addupdatedPortfolio = async (req,res)=>{
  try{
    const user_id = req.params.user_id;
    const body = req.body;
    const updatedportfolioData = { ...body,user_id };
    const updatedportfolio = await studentServices.updatePortfoliobyuserid(updatedportfolioData);
    console.log(updatedportfolio.rows[0]);
    return res.status(200).json({
      data: updatedportfolio,
      message: 'Portfolio updated.'
    });
  }catch(error)
  {
    console.error('Error adding portfolio data:', error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};
const getStudentName = async (req,res)=>{
  try{
    const user_id = req.params.user_id;
    const studname = await studentServices.getStudentNamebyUserid(user_id);
    if(studname.message){
      res.json({message : studname.message})
  }
  else{
      return res.status(200).json({
          data: studname,
        });
  }
  }catch (error) {
          console.error('Error fetching student data:', error);
          return res.status(500).json({
            message: 'Internal Server Error',
          });
        }
};


module.exports = { addPortfolio, getPortfolio1, addupdatedPortfolio,getallStudents,getStudentName };
// console.log("here")
    // const result = await studentServices.getPortfolio();
    // if (!result.rows || result.rows.length === 0) {
    //   return res.status(404).json({
    //     message: "Portfolio doesn't exist, first create one",
    //   });
    // }

    // return res.status(200).json({
    //   data: result.rows,
    //   message: 'Portfolio sent',
    // });