import { TextField, Button, Stack, Card, Alert } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useMediaQuery } from 'react-responsive';



const useStyles = makeStyles((theme) => ({
    sectionContact: {
    },
    contactForm: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'space-between',
    }
}))


export default function Contact() {
    const [status, setStatus] = useState("Submit");
    const [firstName, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [alert, setAlert] = useState(false);
    const [isValid, setIsValid] = useState(true);

    const { control, register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            email: '',
            message: '',
        }
    });
    const emailValidator = (e) => {
        setEmail(e);
        var pattern = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i);
        if(email){
            setIsValid(pattern.test(email));
        }else{
            setIsValid(true);;
        }        
    }

    

    const onSubmit = async () => {
        setStatus("Sending ...");
        var postData = {
            name: firstName,
            email: email,
            message: message,
        };
        console.log(postData);
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        axios.post('https://us-central1-thorbjornsen-80cea.cloudfunctions.net/emailMessage', JSON.stringify(postData), axiosConfig)
            .catch((err) => {
                console.log("AXIOS ERROR: ", err);
            })

        setStatus("Submit");
        setEmail('');
        setName('');
        setMessage('');
        setAlert(true);
        setTimeout(() => {
            setAlert(false);
        }, 10000)
    };
    const classes = useStyles();

    const isMonitor = useMediaQuery({ query: '(min-width: 1042px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1043px)' })

    return (
        <div className={classes.sectionContact}>
            {isMonitor && <Card sx={{ width: "40vw", height: '32vh', minHeight:400, opacity: 0.8, p: 2 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.contactForm}>
                        <Stack
                            sx={{
                                width: '100%',
                            }}

                            spacing={2}
                        >
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => <TextField
                                    {...field}
                                    {...register("firstName", { required: true })}
                                    type="input"
                                    id="firstName"
                                    value={firstName}
                                    label="Name"                                    
                                    onChange={(e => setName(e.target.value))}
                                />}

                            />
                            {errors.firstName?.type === 'required' && <Alert severity="warning">First name required</Alert>}
                            
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <TextField
                                    {...field}
                                    {...register("email", { required: true })}
                                    type="input"
                                    id="email"
                                    value={email}
                                    label="Email"
                                    onChange={(e => emailValidator(e.target.value))}
                                />}
                            />
                            {errors.email?.type === 'required' && <Alert severity="warning">Email required</Alert>}
                            {!isValid && <Alert severity="error">Email invalid, please enter a valid email</Alert>}
                            <Controller
                                name="message"
                                control={control}
                                render={({ field }) => <TextField
                                    {...field}
                                    {...register("message", { required: true })}
                                    type="input"
                                    id="message"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e => setMessage(e.target.value))}
                                />}
                            />
                            {errors.message?.type === 'required' && <Alert severity="warning">Are you senging an email without a message?</Alert>}
                            <Button type="submit" variant="outlined">{status}</Button>
                        </Stack>
                    </div>
                </form>
                {alert ? <Alert sx={{ mt: 2 }} severity="success">Email sent. Thank you for reaching out</Alert> : <></>}
            </Card>}
            {isTabletOrMobile && <Card sx={{ width: "90vw", height: '38vh', minHeight:436, minWidth:300, p: 2 }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={classes.contactForm}>
                        <Stack
                            sx={{
                                width: '100%',
                            }}

                            spacing={2}
                        >
                            <Controller
                                name="firstName"
                                control={control}
                                render={({ field }) => <TextField
                                    {...field}
                                    type="input"
                                    id="firstName"
                                    {...register("firstName", { required: true })}
                                    value={firstName}
                                    label="Name"
                                    onChange={(e => setName(e.target.value))}
                                />}

                            />
                            {errors.firstName?.type === 'required' && <Alert severity="warning">First name required</Alert>}
                            <Controller
                                name="email"
                                control={control}
                                render={({ field }) => <TextField
                                    {...field}
                                    {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/i})}
                                    type="input"
                                    id="email"
                                    value={email}
                                    label="Email"
                                    onChange={(e => emailValidator(e.target.value))}
                                />}
                            />
                            {errors.email?.type === 'required' && <Alert severity="warning">Email required</Alert>}
                            {!isValid && <Alert severity="error">Email invalid, please enter a valid email</Alert>}
                            <Controller
                                name="message"
                                control={control}
                                render={({ field }) => <TextField
                                    {...field}
                                    {...register("message", { required: true })}
                                    type="input"
                                    id="message"
                                    label="Message"
                                    multiline
                                    rows={4}
                                    value={message}
                                    onChange={(e => setMessage(e.target.value))}
                                />}
                            />
                             {errors.message?.type === 'required' && <Alert severity="warning">Are you senging an email without a message?</Alert>}
                            <Button type="submit" variant="outlined">{status}</Button>
                        </Stack>
                    </div>
                </form>
                {alert ? <Alert sx={{ mt: 2 }} severity="success">Email sent. Thank you for reaching out</Alert> : <></>}
            </Card>}

        </div>
    )
}