import { makeStyles } from "@material-ui/core/styles";
import { useInfo } from "common/Hooks";



const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    maxWith: "100%",
  },
  skillsContainer: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
  skillSection: {
    display: "flex",
    flexDirection: "column",
  },
  skillsDisplay: {
    display: "flex",
    flexDirection: "column",
  },
  skillsNameContainer: {
    display: "flex",
    flexWrap: "wrap",
  },
  skillsName: {
    display: "flex",
  },
  progressBar: {
    backgroundColor: useInfo().colors.progressColor,
    height: "5px",
    position: "relative",
  },
  icons: {
    color: useInfo().colors.major,
    fontSize: "24px",
  },

  displaySkills: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  percentage: {
    position: "absolute",
    right: "0",
    bottom: "0",
    marginBottom: "10px",
  },
  skillHeading: {
    textAlign: "center",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  aboutSkills: {
    alignText: "center",
  },
  skillsTitle: {
    fontWeight: "bold",
    textAlign: "center",
    textDecoration: "underline",
    color: useInfo().colors.major,
  },
}));

export default useStyles;
