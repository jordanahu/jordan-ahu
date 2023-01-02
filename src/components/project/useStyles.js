import {makeStyles} from "@material-ui/core/styles";
import {useInfo} from "common/Hooks";



const useStyles = makeStyles((theme) => ({
    toolbar:theme.mixins.toolbar,
    root: {
        // maxWidth: 345,
      },
      media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        '&:hover':{
          transform:"scale(1.2)"
        },
        transition:"transform 0.8s"
      },
      icons:{
        fontSize:"24px",
        color:useInfo().colors.major
      },
      header:{
        color:useInfo().colors.major,
        fontWeight:"bold"
      },
     

    
  }));


export default useStyles;