const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes=require('./api/routes/user');
const studentRoutes= require('./api/routes/student');
const collegeRoutes= require('./api/routes/college');
const bodyParser = require("body-parser");
// const {
//   verifyToken,
//   verifyStudent,
//   verifyAdmin,
// } = require("./middleware/verifyToken");
app.use(bodyParser.json());
app.use(cors())
app.use('/user',userRoutes)
app.use('/student',studentRoutes)
app.use('/college',collegeRoutes)
app.use(express.json());
app.listen(8000, () => {
  console.log("listening on port 8000");
});
