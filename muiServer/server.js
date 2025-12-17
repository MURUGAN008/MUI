const express=require("express")
const path=require("path")
const cors=require("cors");
const app=express();
const {pool}=require("./connectDB");

app.use(cors());
app.use(express.json());
console.log("host=",process.env.DB_HOST);
app.use((req,res,next)=>{
    console.log("User connected!");
    next();
})
app.get("/getAllUsers",async(req,res)=>{
    const client= await pool.connect();
    try{
        const result = await client.query("SELECT * FROM users");
        console.log("result: ",result.rows);
        return res.status(200).json({data: result.rows});
    }
    catch(err){
        console.error(err);
        return res.status(400).send({error: err});
    }
    finally{
        client.release();
    }
})
app.get("/",async(req,res)=>{
    return res.send({message:"Welcome Your are connected!"});
})

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
