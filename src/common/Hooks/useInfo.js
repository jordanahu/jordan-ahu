import { useContext } from "react";
import { InfoContext } from "assets/infoProvider";

const useInfo = () => {
  return useContext(InfoContext);
};

export default useInfo;
