import { Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
    sectionContact:{
        opacity:0.8,
    }
}))


export default function Contact() {
    const classes = useStyles();

    return (
        <div className={classes.sectionContact}>
            <Paper elevation={3} sx={{ m:2, height:'22rem'}}></Paper>
            
        </div>
    )
}