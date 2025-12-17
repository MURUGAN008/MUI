import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box"
// import useTheme from "@mui/material/styles";
// const theme=useTheme();
const HoverCard=styled(Box)(({theme})=>({
    backgroundColor: theme.palette.primary.main,
    transition: "background-color 1s ease",
    "&:hover":{
        backgroundColor: "blue"
    }
}))

export default HoverCard;