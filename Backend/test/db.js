import mysql from "mysql";

// create the connection to database

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql1499",
    database: "xinyu"
});


db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

export default db;