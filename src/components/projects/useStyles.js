import {makeStyles} from "@material-ui/core/styles";
import useInfo from "../customHooks/useInfo";

const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    root: {
        display:"flex",
        flexDirection:"column"
    
    },
    projects:{
      display:"grid",
      gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",
      gridGap:"3em",
      alignItems:"center",
      margin:"0 2em",
      width:"80vw",
    },
    title:{
      fontWeight:"bold",
      textAlign:"center",
      textDecoration:"underline",
      color:useInfo().colors.major,
    },
  
    
  }));


export default useStyles;