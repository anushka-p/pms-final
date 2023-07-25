const bodyParser = require("body-parser");
const client = require("../../connection");
module.exports= {
    addCollege: async (body)=>{
    let insertQuery = `INSERT INTO college(cname, phone_no, address, user_id) 
    VALUES ('${body.collegeName}', '${body.phoneNo}', '${body.address}','${body.user_id}')
    RETURNING *`;
    try {
        const result = await client.query(insertQuery);
        return result;
      } catch (error) {
        throw error;
      }
    },
    collegebyuserid : async (user_id)=>{
        const query = `SELECT * FROM college WHERE user_id = $1`;
        const values = [user_id];
        try {
          const result = await client.query(query, values);
          if(result.rows.length == 0){
            return {message: "College not found"}
          }
          else{
            return result.rows[0];
          }
          
        } catch (error) {
          throw error;
        }
    },
    // To fetch the college id based on the given userid
   getCollegeIdByUserId: async (user_id) => {
      try {
        const query = 'SELECT cid FROM college WHERE user_id = $1';
        const values = [user_id];
        const result = await client.query(query, values);
        return result.rows[0].cid;
      } catch (error) {
        console.error('Error executing query:', error);
        throw error;
      }
    },
   // To fetch the username based on the given college id 
   getStudentsByCollegeId : async (cid) => {
    try {
      const query = 'SELECT firstname, lastname, course, phone FROM users WHERE cid = $1';
      const values = [cid];
      const result = await client.query(query, values);
      if(result.rows.length == 0){
        return {message: "No student registered"}
      }
      else{
        return result.rows;
      }
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  },
  getStudentsWithInternships: async (cid) => {
    try {
      const query = 'SELECT firstname, lastname FROM users WHERE cid = $1 AND internships = true;';
      const values = [cid];
      const result = await client.query(query, values);
      if(result.rows.length == 0){
        return {message: "No student Placed yet"}
      }
      else{
        return result.rows;
      }
    } catch (error) {
      console.error('Error executing query:', error);
      throw error;
    }
  },
    
}