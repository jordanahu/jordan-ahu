import React from 'react'
import {TextField} from '@material-ui/core';
import {Controller} from "react-hook-form";

const Input = ({name,control, ...rest}) => {

    return (
         <Controller
        control = {control}
        name={name}
        render={({field})=>(
            <TextField  {...field} margin="normal" fullWidth variant="outlined" {...rest}/>
      
        )}
        defaultValue=""
        />
       
    )
};

export default Input
