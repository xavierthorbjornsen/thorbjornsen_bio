import React from "react";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import { GiDeliveryDrone } from 'react-icons/gi';

import { useMediaQuery } from 'react-responsive';



const useStyles = makeStyles((theme) => ({
    sectionExperience: {
        opacity: 0.8,
        width: "40vw",
        marginBottom: 20,
    },
    sectionExperienceMobile: {
        opacity: 0.8,
        marginBottom: 20,
        width: '90vw',
    }
}))

const Experience = () => {
    const classes = useStyles();

    const isMonitor = useMediaQuery({ query: '(min-width: 1042px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1043px)' })
    return (
        <div>
            <div className={classes.sectionExperience}>
                {isMonitor && <Stack spacing={2}>
                    <Card sx={{ height: 200, mt:2,  pt:2, pl:2, }}>
                        <Typography variant="h4" >ARRQ <GiDeliveryDrone color="#001f17" /></Typography>
                        <Typography variant="h5" >Chief Technical Officer </Typography>
                        <Typography variant="body1" >Build, design and write python scripts to automate the flight of drones.</Typography>
                    </Card>
                    <Card sx={{ height: 200, pt:2, pl:2,}}>
                        <Typography variant="h4" >NEC </Typography>
                        <Typography variant="h5">Systems Engineer <br /></Typography>
                        <Typography variant="body1" >Build applications and updating existing repositories using .Net/SQL/WPF, and react.</Typography>
                    </Card>
                    <Card sx={{ height: 200, pt:2, pl:2,}}>
                        <Typography variant="h4" >Territory Generation</Typography>
                        <Typography variant="h5">IT Support</Typography>
                        <Typography variant="body1" >Helped manage servers and network configurations</Typography>
                    </Card>
                </Stack>}

            </div>
            <div className={classes.sectionExperienceMobile}>
                {isTabletOrMobile && <Stack spacing={2}>
                    <Card sx={{ height: 180, pt:2, pl:2}}>
                        <Typography variant="h5" >ARRQ <GiDeliveryDrone color="#001f17" /></Typography>
                        <Typography variant="h6" >Chief Technical Officer </Typography>
                        <Typography variant="body1" >Build, design and write python scripts to automate the flight of drones</Typography>
                    </Card>
                    <Card sx={{ height: 180, pt:2, pl:2}}>
                        <Typography variant="h5" >NEC </Typography>
                        <Typography variant="h6" >Systems Engineer <br /></Typography>
                        <Typography variant="body1" >Build applications and updating existing repositories using .Net/SQL/WPF, and React.js</Typography>
                    </Card>
                    <Card sx={{ height: 180, pt:2, pl:2}}>
                        <Typography variant="h5" >Territory Generation</Typography>
                        <Typography variant="h6" >IT Support</Typography>
                        <Typography variant="body1" >Helped manage servers and network configurations</Typography>
                    </Card>
                </Stack>}
            </div>
        </div>

    )
}

export default Experience; 