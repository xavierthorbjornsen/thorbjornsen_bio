import { Card, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { 
    DiGit,
    DiReact,
    DiPython, 
    DiDotnet, 
    DiFirebase, 
    DiRasberryPi,
    DiGithubBadge,
    DiVisualstudio,} from 'react-icons/di';
import { SiSolidity, SiArduino, SiVisualstudiocode, SiMysql, SiCsharp } from 'react-icons/si';



const useStyles = makeStyles((theme) => ({
    sectionRoot: {
        opacity: 0.9,
    }
}))



export default function About() {
    const classes = useStyles();


    return (
        <div className={classes.sectionRoot}>
            <Card elevation={3} sx={{ height: 'auto', width: 270, p: 2, mt:2, display: "flex-grow", }}>
                <Typography variant="body1" >Hi, I am Xavier and I enjoy open-source developement <br />
                    I have been developing in these languages for a while now.
                    <ul>
                        <li ><DiPython size={30} color={"black"} /> Python</li>
                        <li > <DiDotnet size={30} color={"Blue"} /> Dotnet</li>
                        <li ><DiReact size={30} color={"#40e0d0"} /> React</li>
                        <li ><SiCsharp size={30}  /> C Sharp</li>
                        <li ><SiSolidity size={30} /> Solidity</li>
                    </ul>
                </Typography>
            </Card>
            <Card elevation={3} sx={{ height: 'auto',  width: 270, p: 2, mt:2, display: "flex-grow", }}>
                <Typography variant="body1" >I have used these plaforms for various projects<br />
                    <ul>
                        <li > <SiVisualstudiocode size={28} color={"#2196f3"} /> Visual Studio Code</li>
                        <li ><DiGit size={30} /> Git</li>
                        <li ><DiGithubBadge size={30} /> Github</li>
                        <li ><DiRasberryPi size={30} color={"Darkred"}/> RaspberryPi</li>
                        <li > <DiFirebase size={30} color={"#ff9800"}/> FireBase </li>
                        <li ><SiArduino size={30} color={"#40e0d0"}/> Arduino </li>
                    </ul></Typography>
            </Card>
            <Card elevation={3} sx={{ height: 'auto', width: 270, p: 2, mt:2, display: "flex-grow", }}>
                <Typography variant="body1" > I am familiar with these platforms and languages<br />
                    <ul>
                        <li><DiVisualstudio size={30} color={"#AB345A"} /> Visual Studio</li>
                        <li><SiMysql size={30} /> My SQL</li>
                    </ul>
                </Typography>
            </Card>
            <Card elevation={3}  sx={{ width: 800, p: 2, mt:2, display: "flex-grow", }}>
                <Typography variant="body1" > I have  </Typography>
            </Card>

        </div>
    )
};
