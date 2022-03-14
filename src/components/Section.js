import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import moon from "../static/images/moon.jpg";
import plane from "../static/images/plane.jpg";
import sea from "../static/images/sea.jpg";
import lightning from "../static/images/lightning.jpg";


const useStyles = makeStyles((theme) => ({

    sectionAbout: {     
        background: '#333',
        backgroundImage: `url(${moon})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        color:"white",
    },
    sectionContent: {
        height:'100vh',
        maxWidth:'1400px',
        padding: 0,
        margin: theme.spacing(0, 'auto'),
        display: 'block',
        justifyContent: "left",
        alignItems: "center",
    },
    sectionExperience: {
        background: '#0063B0',
        color: "white",
        backgroundImage: `url(${plane})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

    },
    sectionTimeLine: {
        background: '#333',
        color: "white",
        backgroundImage: `url(${sea})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    sectionContact: {
        background: '#333',
        color: "white",
        backgroundImage: `url(${lightning})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },


}))

export default function Section({title, subtitle, dark, id}) {
    const classes = useStyles();
    const isDark = (dark) => {
        switch (dark){
            case 1:
                return classes.sectionAbout;
            case 2:
                return classes.sectionExperience;
            case 3:
                return classes.sectionTimeLine;
            case 4: 
                return classes.sectionContact;
            default:
        }
    }

    return (
        <div className={isDark(dark)}>
            <div className={classes.sectionContent} id={id}>
                <Typography component={'div'} variant="h3" sx={{ paddingLeft: 4, pt:2, pb:2}} >{title}</Typography>
                <Typography component={'div'} variant="body1" sx={{ paddingLeft: 4,}} >{subtitle}</Typography>
            </div>
        </div>
    )
}