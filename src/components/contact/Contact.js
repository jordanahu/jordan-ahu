import React,{useState} from 'react'
import useStyles from "./useStyles";
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useHistory} from "react-router-dom";
import Swal from 'sweetalert2';
import Input from "./input/Input";
import Confetti from 'react-confetti'
import {Typography,Paper, TextareaAutosize, Button} from "@material-ui/core"
import {Fade} from "react-reveal";
import {Footer} from "../";
import axios from "../axios/axios";


const Schema = yup.object().shape({
    username:yup.string().required()
    .matches(/^([^0-9]*)$/, "name should not contain numbers!")
    ,
    email:yup.string().required("email is a required field!")
    .email()
    ,
    message:yup.string()
    .required("message is a required field")
});

const Contact = () => {
    const classes = useStyles();
    const [success, setSuccess] = useState(false);
    const history = useHistory();
    const {handleSubmit, formState:{errors}, control } = useForm({
        mode:"onChange",
        resolver:yupResolver(Schema)
    })
    
    const submitInfo = data =>{

        let {message, email,username} = data
       
        axios.post("/contact",{
          message,
          email,
          username
        })
        .catch((err) => console.log(`Error from seding message:${err.message}`));

        Swal.fire({
            title: "Message Sent!",
            text: `Thank you, ${data.username}, for messaging me!`,
            icon: "success",
            
          }).then(({isConfirmed})=>{
                isConfirmed && history.push("/")
          })
         
          setSuccess(true)
          
        
        
    }
   
    if(success) return <Confetti/>
    

    return (
        <Fade right>
        <section className={classes.root}>
            <div className={classes.toolbar}/>
            <div className={classes.toolbar}/>
            <Typography paragraph variant="h4" className={classes.title}>SEND A MESSAGE</Typography>
           <Paper elevation={3} variant="outlined" className={classes.form}>
            <form noValidate  onSubmit={handleSubmit(submitInfo)}>
                <Input 
                  type="text"
                  control={control}
                  name="username"
                  error={!!errors?.username}
                  helperText={errors?.username?.message}
                   label="Name..."/>
 
                <Input 
                 control={control}
                 type="email"
                  name="email"
                  error={!!errors?.email}
                  helperText={errors?.email?.message}
                  label="Email..."/>
                   
                <Controller
                 name="message"
                 control={control}
                 
                 render = {({field})=>(
                    <TextareaAutosize
                    className={`${classes.messageField} ${errors?.message && classes.outline}`}
                    minRows={10}
                    {...field}
                    aria-label="Message field"
                    placeholder="Write your message..."
                    />
                 )}
                
                />
                    {errors?.message &&
                    (<span className={classes.errorMsg}>
                        {errors?.message?.message}!
                    </span>)}
                <Button type="submit" fullWidth className={classes.send}>Send</Button>
            </form>
            </Paper>
            <Footer/>
        </section>
        </Fade>
    )
}

export default Contact
