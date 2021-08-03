import { makeStyles } from '@material-ui/core/styles';
import useInfo from "../customHooks/useInfo";

const useStyles = makeStyles((theme) => ({


    sideBar:{
      backgroundColor:useInfo().colors.major,
      color:"white",
      height:"100vh",
    },
    drawer:{
      backgroundColor:"rgba(204, 75, 44, 0.2)"
    }
  }));

  export default useStyles;