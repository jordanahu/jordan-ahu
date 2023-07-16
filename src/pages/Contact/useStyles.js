import {makeStyles} from "@material-ui/core/styles";
import { useInfo } from "common/Hooks";
const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    root: {
        display:"flex",
        flexDirection:"column",
        margin:"0 2em",
        alignItems:"center",
        width:"99vw",
    },
    form:{
      maxWidth:"98%",
      width:"500px",
      padding:"1em",
      
    },
    title:{
      fontWeight:"bold",
      textAlign:"center",
      color:useInfo().colors.major,
    },
    messageField:{
      width:"90%",
      outlineColor:"blue",
      "&:hover":{
        border:"1px solid black"
      },
      borderRadius:"4px",
      borderColor:"rgba(128, 128, 128,0.7)",
      padding:"18.5px 14px"
    },
    send:{
      backgroundColor:useInfo().colors.major,
      marginTop:theme.spacing(2),
      color:"white",
      "&:hover":{
        backgroundColor:useInfo().colors.buttonColor
      }

    },
    errorMsg:{
      color:"red",
      fontSize:"12px",
      margin:"3px 14px 0"
    },
    outline:{
      outlineColor:"red",
      borderColor:"red",
      '&::placeholder':{
        color:"red"
      }
    },
    buttonStyle:{
      backgroundColor:useInfo().colors.major,
      '&:hover':{
        backgroundColor:useInfo().colors.buttonColor
      }
    },
 
  
    
  }));


export default useStyles;