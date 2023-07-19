//for creating connection between postgres and node
const { Pool } = require("pg");

const client = new Pool({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "1234",
  database: "postgres",
});

client.connect((err) => {
  if (err) console.log(err);
  else console.log("connected");
});

module.exports = client;
