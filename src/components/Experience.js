import React from "react";
import { Paper } from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    sectionExperience:{
        opacity:0.8,
    }
}))

const Experience = () => {
    const classes = useStyles();
    return (
        <div className={classes.sectionExperience}>
            <Paper elevation={3} sx={{  height:'22rem'}}></Paper>
        </div>

    )
}

export default Experience; 