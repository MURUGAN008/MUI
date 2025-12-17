import Box from "@mui/material/Box"
import {DataGrid} from "@mui/x-data-grid"
import {useState,useEffect} from "react"

const columns=[
    {field: 'id',headerName: 'ID', width: 90},
    {
        field: 'name',
        headerName: "name",
        width: 150,
        editable:true
    },
    {
        field: 'age',
        headerName: 'age',
        type: "number",
        width: 150,
        editable: true
    }
]
const rows = [
  { id: 1, fullName: "Arjun Kumar", age: 21 },
  { id: 2, fullName: "Priya Sharma", age: 22 },
  { id: 3, fullName: "Rohit Verma", age: 23 },
  { id: 4, fullName: "Sneha Iyer", age: 24 },
  { id: 5, fullName: "Amit Patel", age: 25 },
  { id: 6, fullName: "Neha Gupta", age: 22 },
  { id: 7, fullName: "Karthik R", age: 26 },
  { id: 8, fullName: "Pooja Singh", age: 23 },
  { id: 9, fullName: "Vikram Rao", age: 27 },
  { id: 10, fullName: "Ananya Das", age: 21 },
  { id: 11, fullName: "Rahul Mehta", age: 24 },
  { id: 12, fullName: "Divya Nair", age: 22 },
  { id: 13, fullName: "Suresh Babu", age: 28 },
  { id: 14, fullName: "Kavya Reddy", age: 23 },
  { id: 15, fullName: "Manoj Kumar", age: 26 },
  { id: 16, fullName: "Swathi Menon", age: 25 },
  { id: 17, fullName: "Nikhil Jain", age: 24 },
  { id: 18, fullName: "Lakshmi Priya", age: 22 },
  { id: 19, fullName: "Deepak Yadav", age: 27 },
  { id: 20, fullName: "Meera Joshi", age: 21 },
];
const DataGridModel=()=>{
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        const fetchData = async()=>{
        const response=await fetch("http://localhost:3000/getAllUsers");
        const result=await response.json();
        console.log(result.data);
        setUserData(result.data);
        };
        fetchData();
    },[])
    return(
        <Box sx={{height: "400px",width: "100%",backgroundColor: "red"}}>
            <DataGrid 
                rows={userData}
                columns={columns}
                initialState={{
                    pagination:{
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5,10]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    )
}
export default DataGridModel;
