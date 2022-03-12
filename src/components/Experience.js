import React from "react";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";
import { Typography, Link } from "@mui/material";
import { GiDeliveryDrone } from 'react-icons/gi';
import { HiOutlineExternalLink } from 'react-icons/hi';



const useStyles = makeStyles((theme) => ({
    sectionExperience: {
        opacity: 0.8,
        maxWidth: 300,
    }
}))

const Experience = () => {
    let url = "https://github.com/Xbjornsen/DroneFlight/blob/main/take_off_and_land.py";
    const classes = useStyles();
    return (
        <div className={classes.sectionExperience}>
            <Stack spacing={2}>
                <Card><Typography variant="h4" sx={{ p: 2, }}/>ARRQ <GiDeliveryDrone color="#001f17" />
                    <Typography variant="h5">Chief Techincal Officer </Typography>
                    <Typography variant="body1">Build, design and write python scripts to automate the flight of drones. Example code below.<br /> <Link underline="none" href={url} >Python flight <HiOutlineExternalLink /></Link> </Typography>
                </Card>
                <Card><Typography variant="h4" sx={{ p: 2, }}/>NEC  <br />
                    <Typography variant="h5">Systems Engineer <br /></Typography><Typography variant="body1"> My Role here was a full stack developer. Building applications and updating existing repositories</Typography>
                </Card>
                <Card><Typography variant="h4" sx={{ p: 2, }}>Territory Generation
                    <br /><Typography>IT Support</Typography></Typography></Card>
            </Stack>
        </div>

    )
}

export default Experience; 