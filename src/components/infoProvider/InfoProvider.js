import React, {createContext} from 'react';
import data from "./data";

export const InfoContext = createContext();


export const InfoProvider = ({children}) => {


    return (
        <InfoContext.Provider value={data}>
            {children}
        </InfoContext.Provider>
    )
}


