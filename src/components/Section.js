import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((Theme) => ({

    section: {

    },
    sectionContent: {
        maxWidth: 800,
        margin: 0,
        padding: 40,

    },
    sectionDark: {
        background: '#333',
        color: "white",

    },
    none: {
    }

}))

export default function Section({title, subtitle, dark, id}) {
    const classes = useStyles();
    const isDark = (dark) => {
        if(dark){
            return classes.sectionDark;
        }else {
            return classes.section;
        }
    }

    return (
        <div className={isDark(dark)}>
            <div className={classes.sectionContent} id={id}>
                <Typography variant="h1" >{title}</Typography>
                <Typography variant="body1">{subtitle}</Typography>
            </div>
        </div>
    )
}