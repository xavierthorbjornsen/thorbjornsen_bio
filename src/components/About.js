import { Card, Typography, Link, Button } from "@mui/material";
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
    DiVisualstudio,
} from 'react-icons/di';
import { SiSolidity, SiArduino, SiVisualstudiocode, SiMysql, SiCsharp } from 'react-icons/si';
import { useMediaQuery } from 'react-responsive';
import { AiFillGithub } from 'react-icons/ai';




const useStyles = makeStyles((theme) => ({
    sectionDesktop: {
        opacity: 0.9,
        height: '90%',
    },
    sectionMobile: {
        opacity: 0.9,
        height: '90%',
        width: '90vw',
    }
}))



export default function About() {
    const classes = useStyles();
    const isMonitor = useMediaQuery({ query: '(min-width: 1042px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1043px)' })

    let urlGit = "https://github.com/xavierthorbjornsen";


    return (
        <div>
            <div className={classes.sectiondesktop}>
                {isMonitor && <div> <Card elevation={3} sx={{ width: "40vw", p: 2, mt: 2, display: "flex-grow", flexDirection: 'column' }}>
                    <Typography variant="body1" >Hi, my name is Xavier and I enjoy open-source developement.
                        I have been developing in these languages for a while now.</Typography>
                    <ul>
                        <li ><DiPython size={30} color={"black"} /> Python</li>
                        <li ><DiDotnet size={30} color={"Blue"} /> Dotnet</li>
                        <li ><DiReact size={30} color={"#40e0d0"} /> React</li>
                        <li ><SiCsharp size={30} /> C Sharp</li>
                        <li ><SiSolidity size={30} /> Solidity</li>
                    </ul>
                    <Typography>View my Github.
                        <Button sx={{ ml: 2 }} size="small" variant="outlined" color="primary"><Link underline="none" href={urlGit} ><AiFillGithub size={30} color="black" /></Link></Button>
                    </Typography>

                </Card>

                    <Card elevation={3} sx={{ height: 'auto', width: "40vw", p: 2, mt: 2, display: "flex-grow", }}>
                        <Typography variant="body1" >I have used these plaforms for various projects.</Typography>
                        <ul>
                            <li ><SiVisualstudiocode size={26} color={"#2196f3"} /> Visual Studio Code</li>
                            <li ><DiGit size={30} /> Git</li>
                            <li ><DiGithubBadge size={30} /> Github</li>
                            <li ><DiRasberryPi size={30} color={"Darkred"} /> RaspberryPi</li>
                            <li ><DiFirebase size={30} color={"#ff9800"} /> FireBase </li>
                            <li ><SiArduino size={30} color={"#40e0d0"} />Arduino </li>
                            <li><DiVisualstudio size={30} color={"#AB345A"} /> Visual Studio</li>
                            <li><SiMysql size={30} /> My SQL</li>
                        </ul>
                    </Card>

                </div>
                }
            </div>
            <div className={classes.sectionMobile}>
                {isTabletOrMobile && <div><Card elevation={3} sx={{ p: 2, mt: 2, }}>
                    <Typography variant="body1" >Hi, my name is Xavier and I enjoy open-source developement.
                        I have been developing in these languages for a while now.</Typography>
                    <SiVisualstudiocode size={28} color={"#2196f3"} />
                    <DiGit size={30} />
                    <DiGithubBadge size={30} />
                    <DiRasberryPi size={30} color={"Darkred"} />
                    <DiFirebase size={30} color={"#ff9800"} />
                    <SiArduino size={30} color={"#40e0d0"} />
                    <DiVisualstudio size={30} color={"#AB345A"} />
                    <SiMysql size={30} />
                </Card>
                    <Card elevation={3} sx={{ p: 2, mt: 2, }}>
                        <Typography variant="body1" >I have used these plaforms for various projects.</Typography>
                        <DiPython size={30} color={"black"} />
                        <DiDotnet size={30} color={"Blue"} />
                        <DiReact size={30} color={"#40e0d0"} />
                        <SiCsharp size={30} />
                        <SiSolidity size={30} />
                    </Card>
                    <Card elevation={3} sx={{ p: 2, mt: 2, }}>
                        <Typography>View my Github.
                            <Button sx={{ ml: 2 }} size="small" variant="outlined" color="primary"><Link underline="none" href={urlGit} ><AiFillGithub size={25} color="black" /></Link></Button>
                        </Typography>
                    </Card>
                </div>
                }
            </div>
        </div>
    )
};
