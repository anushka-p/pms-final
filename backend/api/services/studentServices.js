const bodyParser = require("body-parser");
const client = require("../../connection");
module.exports = {

//inserting student data after registration
createPortfolio : (body, callback)=>{
    let insertQuery = `insert into users(firstname, lastname, course, phone, branch, semester_training, cgpa, placed, internships, skills) 
                       values('${body.firstname}', '${body.lastname}', '${body.course}', ${body.phone},'${body.branch}', ${body.semester_training}, ${body.cgpa}, '${body.placed}', '${body.internships}', '${body.skills}')`;
    client.query(insertQuery, (error, result) => {
                        if (error) {
                          return callback(error);
                        }
                        return callback(null, result);
                      });
},

//for updating the portfolio
updatePortfolio :(body, callback)=>{

},

//for deleting the portfolio
deletePortfolio :(body, callback)=>{

},

//for viewing the portfolio
viewPortfolio : (body, callback)=>{

}
//

}
