import {useContext} from 'react';
import {InfoContext} from "../infoProvider/InfoProvider";

const useInfo = () => {

    return useContext(InfoContext);
        
}

export default useInfo
