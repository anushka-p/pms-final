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
          console.log(result.rows);
          if(result.rows.length == 0){
            return {message: "College not found"}
          }
          else{
            return result.rows[0];
          }
          
        } catch (error) {
          throw error;
        }
    }
}