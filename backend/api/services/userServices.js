const client = require("../../connection");
const bcrypt = require("bcrypt");

module.exports = {
  // inserting user data into users table at signup
 createUser: (body, callback) => {
    
    insertQuery = `insert into user_roles (useremail, password,role)
    values ('${body.email}','${body.password}','${body.role}')
    RETURNING id;`;
    client.query(insertQuery, (error, result) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result);
    });
  },

CheckEmail : async(email)=>{
  const query = `SELECT useremail FROM user_roles WHERE useremail = $1`;
  const values = [email];
  try {
    const result = await client.query(query, values);
      const available =result.rows.length>0;
      return available;
    }catch (error) {
    throw error;
  }
},
  VerifyUser: (body, callback) => {
    console.log(body.email);
    query = `Select * from user_roles where useremail = '${body.email}' `;
    client.query(query, async (error, result) => {
      if (error) {
        console.log("errrrr");
        return callback(error);
      }
      else{
                  
          return callback(null, result);
      }
      
    });
  },

  //log out
  logOutUser : (body, callback)=>{
    
  }

//   VerifyUser: (body, callback) => {
//     query = `Select * from user_roles where email = '${body.email}' `,
//     client.query(query, async (err, result) => {
//       //sends a query to the database to check if the email matches the provided email
//       if (!err) {
//         console.log("email matched");
//         const isPasswordMatch = await bcrypt.compare(
//           body.password,
//           result.rows[0].password
//         );
//         // If the password doesn't match, return an error response
//         if (!isPasswordMatch) {
//           return callback("Invalid password");
//         }
//         //if the password match, it generated a JSON Web token
//         const token = jwt.sign(
//           { email: body.email, rollno: body.rollno, role: body.role },
//           process.env.TOKEN_KEY,
//           {
//             expiresIn: "2h",
//           }
//         );

//         // req.user = {
//         //   rollno: result.rows[0].rollno,
//         //   role: body.role,
//         //   stu_email: result.rows[0].stu_email,
//         // };
//         callback({ token : token });
//         //using the users email and role
//         //   res.status(201).send(result.rows[0]);
//       } else {
//         callback(err);
//         //res.send("invalid user or password");
//       }
// })
    
// }
}
