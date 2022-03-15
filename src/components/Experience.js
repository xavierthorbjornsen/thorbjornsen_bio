import React from "react";
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import { makeStyles } from "@mui/styles";
import { Typography, Link } from "@mui/material";
import { GiDeliveryDrone } from 'react-icons/gi';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useMediaQuery } from 'react-responsive';



const useStyles = makeStyles((theme) => ({
    sectionExperience: {
        opacity: 0.8,
        maxWidth: 270,
        marginBottom: 20,
        
    }
}))

const Experience = () => {
    let url = "https://github.com/Xbjornsen/DroneFlight/blob/main/take_off_and_land.py";
    const classes = useStyles();

    const isMonitor = useMediaQuery({ query: '(min-width: 1042px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1043px)' })
    return (
        <div className={classes.sectionExperience}>
            {isMonitor && <Stack spacing={2}>
                <Card sx={{ height:200, }}>
                    <Typography variant="h4" sx={{ paddingLeft: 2,  }}>ARRQ <GiDeliveryDrone color="#001f17" /></Typography>
                    <Typography variant="h5"  sx={{ paddingLeft: 2, }}>Chief Technical Officer </Typography>
                    <Typography variant="body1" sx={{paddingLeft: 2, }}>Build, design and write python scripts to automate the flight of drones. Example code below.<br /> <Link underline="none" href={url} >Python flight <HiOutlineExternalLink /></Link> </Typography>
                </Card>
                <Card sx={{ height:200, }}>
                    <Typography variant="h4" sx={{ paddingLeft: 2, }}>NEC </Typography>
                    <Typography variant="h5"  sx={{paddingLeft: 2, }}>Systems Engineer <br /></Typography>
                    <Typography variant="body1" sx={{paddingLeft: 2,  }}>Build applications and updating existing repositories using DotNet/SQL/WPF, and react.</Typography>
                </Card>
                <Card sx={{ height:200, }}>
                    <Typography variant="h4" sx={{ paddingLeft: 2,  }}>Territory Generation</Typography>
                    <Typography sx={{paddingLeft: 2 }}>IT Support</Typography>
                </Card>
            </Stack>}
            {isTabletOrMobile && <Stack spacing={2}>
                <Card sx={{ height:150, }}>
                    <Typography variant="h5" sx={{ paddingLeft: 2,  }}>ARRQ <GiDeliveryDrone color="#001f17" /></Typography>
                    <Typography variant="h6"  sx={{ paddingLeft: 2, }}>Chief Technical Officer </Typography>
                    <Typography variant="body1" sx={{paddingLeft: 2, }}>Build, design and write python scripts to automate the flight of drones. Example code below.</Typography>
                </Card>
                <Card sx={{ height:150, }}>
                    <Typography variant="h5" sx={{ paddingLeft: 2, }}>NEC </Typography>
                    <Typography variant="h6"  sx={{paddingLeft: 2, }}>Systems Engineer <br /></Typography>
                    <Typography variant="body1" sx={{paddingLeft: 2,  }}>Build applications and updating existing repositories using DotNet/SQL/WPF, and react</Typography>
                </Card>
                <Card sx={{ height:150, }}>
                    <Typography variant="h5" sx={{ paddingLeft: 2,  }}>Territory Generation</Typography>
                    <Typography variant="h6" sx={{paddingLeft: 2 }}>IT Support</Typography>
                </Card>
            </Stack>}
        </div>

    )
}

export default Experience; 