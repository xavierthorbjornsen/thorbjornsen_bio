import React from "react";
import { Paper } from "@mui/material";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    sectionTimeline:{
        opacity:0.8,
    }
}))

export default function TimeLine() {
    const classes = useStyles();
    return (
        <div className={classes.sectionTimeline}>
            <Paper elevation={3} sx={{ m:2, height:'22rem'}}></Paper>
        </div>
    )
}