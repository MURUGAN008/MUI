const pkg=require("pg");
const {Pool}=pkg;
// require("dotenv").config();
console.log("host=",process.env.DB_HOST);
const pool=new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT || 5432,
})

module.exports = {pool};