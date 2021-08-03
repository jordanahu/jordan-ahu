import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

   root:{
     width:"100%",
     overflowX:"hidden",
     position:"absolute",
     top:"0",
     zIndex:"100"
   },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    toolbar:{
      display:"flex",
      justifyContent:"space-between",
      backgroundColor:theme.palette.background.paper,
      
    }
  }));

  export default useStyles;