const bodyParser = require("body-parser");
const client = require("../../connection");
// module.exports = {

// //inserting student data after registration
// checkCollege: async(body, callback)=>{
//   // console.log(body);
//   const collegeQuery = `SELECT cid FROM college WHERE cname = '${body.college}'`;
//   // const collegeResult = await pool.query(collegeQuery, [collegeName]);
//   client.query(collegeQuery, (error, result) => 
//   {
//     if (error) {
//       return callback(error);
//     }
//     return callback(null, result);
//   }
// )},
// createPortfolio : async (body,callback)=>{
  
//   console.log(body);
//   // const cid = collegeResult.rows[0].cid;

//     let insertQuery = `insert into users(firstname, lastname, course, phone, branch, semester_training, cgpa, placed, internships, skills, college, cid) 
//                        values('${body.firstname}', '${body.lastname}', '${body.course}', ${body.phone},'${body.branch}', ${body.semester_training}, ${body.cgpa}, ${body.placed}, ${body.internships}, '${body.skills}','${body.college}', ${body.cid})
//                        RETURNING rollno`;
//     client.query(insertQuery, (error, result) => {
//                         if (error) {
//                           return callback(error);
//                         }
//                         return callback(null, result);
//                       });
// },
module.exports = {
  // Inserting student data after registration
  checkCollege: async (body) => {
    const collegeQuery = `SELECT cid FROM college WHERE cname = '${body.college}'`;

    try {
      const result = await client.query(collegeQuery);
      return result;
    } catch (error) {
      throw error;
    }
  },
  returnuseremail : async (body)=>{
    const userrolequery = `SELECT useremail FROM user_roles WHERE useremail = '${body.useremail}'`;
    try {
      const result = await client.query(userrolequery);
      console.log(result.rows);
      return result;
    } catch (error) {
      throw error;
    }
  },

  createPortfolio: async (body) => {
    console.log(body);

    let insertQuery = `INSERT INTO users(firstname, lastname, course, phone, branch, semester_training, cgpa, placed, internships, skills, college, cid, user_id) 
                       VALUES ('${body.firstName}', '${body.lastName}', '${body.course}', '${body.phoneNo}', '${body.branch}', '${body.semesterTraining}', ${body.cgpa}, '${body.placed}', '${body.internships}', '${body.skills}', '${body.college}', ${body.cid}, ${body.user_id})
                       RETURNING rollno`;

    try {
      console.log("errrrrrrrrr");
      const result = await client.query(insertQuery);
      
      return result;
    } catch (error) {
      throw error;
    }
  },
  //for updating the portfolio
updatePortfolio :(body, callback)=>{
   
},

//for deleting the portfolio
deletePortfolio :(body, callback)=>{

},

//for viewing the portfolio
viewPortfolio : (body, callback)=>{

},
// allCourses: (callback) => {
//   pool.query(`select * from courses`, (error, result) => {
//       if (error) {
//           return callback(error)
//       }
//       return callback(null, result)
//   })
// },
 getPortfoliobyuserid : async (user_id) => {
  const query = `SELECT * FROM users WHERE user_id = $1`;
  const values = [user_id];

  try {
    const result = await client.query(query, values);
    return result.rows;
  } catch (error) {
    throw error;
  }
},
getstudentdata : async(user_id)=>
{
   const query = `SELECT * FROM users WHERE user_id= ${user_id}`;
   const result = await client.query(query);
   console.log("rrrrr", result);
   if(result.rows.length == 0){
    return {message: "data not found"}
  }
  else{
    console.log("hiiiiiiiii");
    return result.rows[0];
  }
},
updatePortfoliobyuserid: async(body)=>{
  try{
    console.log(body.firstName);
    const updatequery = `
    UPDATE users
    SET firstname = $1, 
        lastname = $2, 
        course = $3, 
        phone = $4, 
        branch = $5,
        semester_training = $6,
        cgpa = $7,
        placed = $8,
        internships = $9,
        skills = $10,
        college = $11
    WHERE user_id = $12;
  `;
  const values = [
    body.firstname,
    body.lastname,
    body.course,
    body.phoneno,
    body.branch,
    body.semester_training,
    body.cgpa,
    body.placed,
    body.internships,
    body.skills,
    body.college,
    body.user_id,
  ];
  const result = await client.query(updatequery, values);
  return result;
  } catch(error)
  {
    console.error('Error updating portfolio data:', error);
    throw error;
  }
}
};


