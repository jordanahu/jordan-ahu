import {makeStyles} from "@material-ui/core/styles";
import useInfo from "../customHooks/useInfo";

const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    root: {
        display:"flex",
        flexDirection:"column"
    
    },
    heading:{
        color:useInfo().colors.major,
        fontWeight:"bold",
        textAlign:"center"
    },
    about:{
        display:"flex",
        flexDirection:"column",
       
    },
    aboutContent:{
       display:"flex",
       flexWrap:"wrap-reverse",
       alignItems:"center",
       justifyContent:"center"

    },
    aboutText:{
        maxWidth:"350px",
        margin:"0 2rem 2rem 2rem",
        alignSelf:"flex-end",
        fontSize:"1.2rem",
        fontWeight:"500",
        textAlign:"justify"
        
    },
    aboutImage:{
        objectFit:"contain",
        maxWidth:"100%",
        width:"200px",
        height:"300px",
        borderRadius:"1rem",
        alignSelf:"flex-end",
        border:`2px solid ${useInfo().colors.major}`
    },
    info_title:{
        color:useInfo().colors.major,
        fontWeight:"bold",
        fontSize:"1.2rem",
        marginLeft:theme.spacing(2),
        marginTop:theme.spacing(2)
    },
    infoText:{
        fontWeight:"bold",
        
    },
    icons:{
        color:useInfo().colors.major,
        fontSize:"24px"
    }
    
  }));


export default useStyles;