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

    const { control, register, formState: { errors }, handleSubmit } = useForm({
        defaultValues: {
            firstName: '',
            email: '',
            message: '',
        }
    });

    const onSubmit = async () => {
        setStatus("Sending ...");
        var postData = {
            name: firstName,
            email: email,
            message: message,
        };
        console.log(errors);
        console.log(postData);
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
            }
        };

        // axios.post('https://us-central1-thorbjornsen-80cea.cloudfunctions.net/emailMessage', JSON.stringify(postData), axiosConfig)
        //     .catch((err) => {
        //         console.log("AXIOS ERROR: ", err);
        //     })

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
            {isMonitor && <Card sx={{ width: "40vw", height: '40vh', opacity: 0.8, p: 2 }}>
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
                                    error={errors}
                                    type="input"
                                    id="firstName"
                                    value={firstName}
                                    label="Name"

                                    onChange={(e => setName(e.target.value))}
                                />}

                            />
                            <Alert
                                errors={errors}
                                name="multipleErrorInput"
                                render={({ messages }) => {
                                    console.log("messages", messages);
                                    return messages
                                        ? Object.entries(messages).map(([type, message]) => (
                                            <p key={type}>{message}</p>
                                        ))
                                        : null;
                                }}
                            />
                            <Controller
                                name="email"
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
                            {errors.email?.type === 'required' && "valid email is required"}
                            <Controller
                                name="message"
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
                {alert ? <Alert sx={{ mt: 2 }} severity="success">Email sent. Thank you for reaching out</Alert> : <></>}
            </Card>}
            {isTabletOrMobile && <Card sx={{ width: "90vw", height: '90vh', p: 2 }}>
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
                            {errors.firstName?.type === 'required' && "First name is required"}
                            <Controller
                                name="email"
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
                            {errors.email?.type === 'required' && "valid email is required"}
                            <Controller
                                name="message"
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
                {alert ? <Alert sx={{ mt: 2 }} severity="success">Email sent. Thank you for reaching out</Alert> : <></>}
            </Card>}

        </div>
    )
}