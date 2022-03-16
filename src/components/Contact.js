import { TextField, Button, Stack, Card, Alert} from "@mui/material";
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
    const [firstname, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [message, setMessage ] = useState("");
    const [alert, setAlert ] = useState(false);

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    });

    const onSubmit = async () => {
        setStatus("Sending ...");
        var postData = {
            name: firstname,
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
        }, 2000)
    };
    const classes = useStyles();

    const isMonitor = useMediaQuery({ query: '(min-width: 1042px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1043px)' })

    return (
        <div className={classes.sectionContact}>
            {isMonitor && <Card sx={{  width: "40vw", height:'40vh', opacity:0.8, p:2}}>
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
                                id="firstname"
                                value={firstname}
                                label="Name"
                                required
                                onChange={(e => setName(e.target.value))}
                            />}
                        />
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => <TextField 
                                {...field}
                                type="input"
                                id="email"
                                required
                                value={email}
                                label="Email"
                                onChange={(e => setEmail(e.target.value))}
                            />}
                        />
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => <TextField 
                                {...field}
                                type="input"
                                id="message"
                                label="Message"
                                multiline
                                rows={4}
                                required
                                value={message}
                                onChange={(e => setMessage(e.target.value))}
                            />}
                        />
                        <Button type="submit" variant="outlined">{status}</Button>
                    </Stack>
                </div>
            </form>
            {alert ? <Alert sx={{ mt: 2}} severity="success">Email sent. Thank you for reaching out</Alert> : <></>}
            </Card>}
            {isTabletOrMobile && <Card sx={{ width: "90vw", height:'90vh', p:2}}>
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
                                id="firstname"
                                value={firstname}
                                label="Name"
                                required
                                onChange={(e => setName(e.target.value))}
                            />}
                        />
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => <TextField 
                                {...field}
                                type="input"
                                id="email"
                                required
                                value={email}
                                label="Email"
                                onChange={(e => setEmail(e.target.value))}
                            />}
                        />
                        <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => <TextField 
                                {...field}
                                type="input"
                                id="message"
                                label="Message"
                                multiline
                                rows={4}
                                required
                                value={message}
                                onChange={(e => setMessage(e.target.value))}
                            />}
                        />
                        <Button type="submit" variant="outlined">{status}</Button>
                    </Stack>
                </div>
            </form>
            {alert ? <Alert sx={{ mt: 2}} severity="success">Email sent. Thank you for reaching out</Alert> : <></>}
            </Card>}

        </div>
    )
}