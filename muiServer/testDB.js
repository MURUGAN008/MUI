const path=require("path");
const { pool } = require("./connectDB.js");

console.log(pool);
(async()=>{
    const res = await pool.query("SELECT NOW()");
    console.log(res.rows);
})();

