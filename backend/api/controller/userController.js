const userServices = require("../services/userServices");

const signup = async (req, res) => {
  const body = req.body;
  console.log(req.body);
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

module.exports = { signup };
