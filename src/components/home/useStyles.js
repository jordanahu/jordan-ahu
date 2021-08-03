import {makeStyles} from "@material-ui/core/styles";
import useInfo from "../customHooks/useInfo";

const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    root: {
      width:"100%",
      height:"100%",
    },
    main:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",

    },
    name:{
      align:"center",
      color:useInfo().colors.major,
      fontWeight:"700",
      fontSize:"1.25rem"
    },
    large: {
      width: "160px",
      height: "160px",
      marginBottom:theme.spacing(3),
      borderRadius:"50%",
      maxWidth:"100%",
      objectFit:"contain",
      backgroundColor:useInfo().colors.major
    },
  
    icons:{
      marginTop:theme.spacing(3)
    },
    color:{
      color:useInfo().colors.major
    },
    profile:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    },
    download:{
      backgroundColor:useInfo().colors.major,
      marginTop:theme.spacing(6),
      color:"white",
      "&:hover":{
        backgroundColor:useInfo().colors.buttonColor
      }
      
    }
  }));


export default useStyles;