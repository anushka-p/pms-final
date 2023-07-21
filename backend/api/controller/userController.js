const userServices = require("../services/userServices");
const bcrypt = require("bcrypt");
const verifyToken = require("../../middleware/verifyToken");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const body = req.body;
  body.password =  await bcrypt.hash(body.password, 10);
 userServices.createUser(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        message: "Database connection error.......",
      });
    }
    return res.status(200).json({
      data: results,
      message:'User created.'
    });
  });
};

const login =async (req, res)=> {
  const body = req.body;
  await userServices.VerifyUser(body, async (err, results)=> {
    if(err) {
      console.log("errrr====",err);
      return res.status(500).json({
        message: "User is not registered....",
      });
    }
    const isPasswordMatch = await bcrypt.compare(
      body.password,
      results.rows[0].password)
      if (!isPasswordMatch) {
        return res.send({message: "Invalid password"});
      }
            const token = jwt.sign(
          { email: body.email, rollno: body.rollno, role: body.role },
          process.env.TOKEN_KEY,
          {
            expiresIn: "2h",
          }
        );
    if(results.rows[0].role=='student')
    {
      return res.json({message:"student route", token: token})      
    }
    else if(results.rows[0].role=='college')
    {
      return res.json({message:"college route", token: token})
    }

  });
};

module.exports = { signup, login };
