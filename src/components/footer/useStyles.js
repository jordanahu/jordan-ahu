import {makeStyles} from "@material-ui/core/styles";
import { useInfo } from "common/Hooks";

const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    root: {
      width:"100vw",
      backgroundColor:useInfo().colors.footerColor,
      display:"flex",
      flexDirection:"column",
      alignItems: "center",
      color:"white",
      marginTop:theme.spacing(10),
      
    },
    name:{
      fontWeight:"bold",
      marginTop:theme.spacing(7),
      marginBottom:theme.spacing(5),
      fontSize:"1.5rem"
    },
    footerAbout:{
      textAlign:"center",
      marginBottom:theme.spacing(3),
      fontWeight:"bold"
    },
    icon:{
      color:useInfo().colors.footerColor,
      borderRadius:"50%",
      backgroundColor:useInfo().colors.major,
      padding:"0.45rem",
      transition:"0.3s",
      "&:hover":{
        backgroundColor:useInfo().colors.footerColor,
        color:useInfo().colors.major
      }
    },
    copy:{
      fontSize:"0.75rem",
      color:useInfo().colors.copy
    }

   
  }));


export default useStyles;