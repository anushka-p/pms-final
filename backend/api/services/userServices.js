const client = require("../../connection");

module.exports = {
  // inserting user data into users table at signup
  createUser: (body, callback) => {
    insertQuery = `insert into user_roles (useremail, password,role)
    values ('${body.email}','${body.password}','${body.role}')`;
    client.query(insertQuery, (error, result) => {
      if (error) {
        return callback(error);
      }
      return callback(null, result);
    });
  },
};
