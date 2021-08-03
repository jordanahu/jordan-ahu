import {makeStyles} from "@material-ui/core/styles";
import useInfo from "../customHooks/useInfo";

const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    root: {
        display:"flex",
        flexDirection:"column"
    
    },
    title:{
      fontWeight:"bold",
      textAlign:"center",
      textDecoration:"underline",
      color:useInfo().colors.major,
    },
    skillHeading:{
      textAlign:"center",
      fontWeight:"bold",
      textDecoration:"underline"
    },
    services:{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",
      gridGap:"3em",
      alignItems:"center",
      margin:"0 2em",
     
    },
  

    
  }));


export default useStyles;