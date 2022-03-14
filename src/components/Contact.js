import { TextField, Button, Stack, Card} from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";


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

    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    });

    const onSubmit = async () => {
        setStatus("sending ...");
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
    };
    const classes = useStyles();

    return (
        <div className={classes.sectionContact}>
            <Card sx={{ width: 300, opacity:0.7, p:2}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={classes.contactForm}>
                    <Stack
                        sx={{
                            width: '35ch',
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
            </Card>

        </div>
    )
}