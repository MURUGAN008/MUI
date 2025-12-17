import { useState } from 'react'
// import Box from "@mui/material/Box"
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import './App.css'
import Stack from '@mui/material/Stack'
import HoverCard from '../styles/HoverCard'
import { useTheme } from '@mui/material/styles'
import DataGridModel from '../Pages/DataGridModel'
function App() {

  const theme=useTheme();
        console.log(theme.palette.primary.main);

  return (
    <>
      {/* <Container sx={{borderRadius: "20px",backgroundColor: "WindowFrame",display:"flex",alignItems:"center",justifyContent:"center",transition: "transform 0.1s ease","&:hover":{
        transform: "translateY(10px)",
        cursor: "pointer"
      },}}>
        <Stack spacing={0.5}>
        <Typography variant='h2'>Welcome!</Typography>
        <Typography  variant="h2" sx={{mt: "15px"}}>MUI library inspired by google Metrial design</Typography>
        </Stack>
      </Container> */}
      <HoverCard>
        <Typography variant='h3'>Hello, World!</Typography>
      </HoverCard>
      <DataGridModel></DataGridModel>
    </>
  )
}

export default App
