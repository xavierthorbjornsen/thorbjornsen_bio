import { TextField, Button, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import React, { useState } from "react";


const useStyles = makeStyles((theme) => ({
    sectionContact: {
        opacity: 0.8,
    },
    contactForm: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'space-between',
    }
}))


export default function Contact() {
    const [status, setStatus] = useState("Submit");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const { name, email, message } = e.target.elements;
        var postData = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
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
    };
    const classes = useStyles();

    return (
        <div className={classes.sectionContact}>
            <form onSubmit={handleSubmit}>
                <div className={classes.contactForm}>
                    <Stack
                        sx={{
                            width: '35ch',                         
                        }}
   
                        spacing={2}
                        >
                        <TextField
                            required
                            type="text"
                            id="Name"
                            label="Name"
                            value={value}      
                        />
                        <TextField
                            required
                            type="email"
                            id="email"
                            label="Email"
                            value={value}
                            
                        />
                        <TextField
                            required
                            type="text"
                            id="message"
                            label="Message"
                            multiline
                            rows={4}
                            value={value}         
                        />
                        <Button type="submit" variant="outlined">{status}</Button>
                    </Stack>
                </div>
            </form>

        </div>
    )
}