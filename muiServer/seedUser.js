const {pool}=require("./connectDB")

const seedUser=async()=>{
    try{
        console.log("Pooling started...");
        const res = await pool.query(`
  INSERT INTO users (id,name, age)
  VALUES
    (1,'Arjun Kumar', 22),
    (2,'Priya Sharma', 21),
    (3,'Rohit Verma', 23),
    (4,'Sneha Iyer', 24),
    (5,'Amit Patel', 25),
    (6,'Neha Gupta', 22),
    (7,'Karthik Raj', 26),
    (8,'Pooja Singh', 23),
    (9,'Vikram Rao', 27),
    (10,'Ananya Das', 21),
    (11,'Rahul Mehta', 24),
    (12,'Divya Nair', 22),
    (13,'Suresh Babu', 28),
    (14,'Kavya Reddy', 23),
    (15,'Manoj Kumar', 26),
    (16,'Swathi Menon', 25),
    (17,'Nikhil Jain', 24),
    (18,'Lakshmi Priya', 22),
    (19,'Deepak Yadav', 27),
    (20,'Meera Joshi', 21)
  ON CONFLICT DO NOTHING
`);
    console.log(res.rowCount+" rows inserted!\nSeeding end successfully");
    }
    catch(error){
        console.error("Error occured: "+error);
    }
    finally{
        await pool.end();
    }
}
seedUser();