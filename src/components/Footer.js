
import { Container, Typography, Link } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import React from "react";
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';


const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: '#001B29',
        bottom: 0,
        minWidth: '322px',
    },
    footerLinks: {
        width: "20%",
        display:"flex",
    }

}))


function Footer() {
    const classes = useStyles();

    let urlLi = "https://www.linkedin.com/in/xavier-thorbjornsen-30201ab2";
    let urlGit = "https://github.com/xavierthorbjornsen";

    const isMonitor = useMediaQuery({ query: '(min-width: 1042px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1043px)' })

    return (

        <div className={classes.footer}>
            {isMonitor && <Container
                sx={{
                    position: "aboslute",
                    bottom: "auto",
                    background: "#001B29",
                    display: "block",
                    justifyContent: "end"
                }}>
                <div className={classes.footerLinks}>
                    <Typography variant="h6" fontFamily={"sans-serif"} color={'whitesmoke'}>&copy; All Images</Typography>

                    <Link sx={{pl:2}} underline="none" href={urlLi} ><AiFillLinkedin size={30} /></Link>
                    <Link sx={{pl:2}} underline="none" href={urlGit} ><AiFillGithub size={30} /></Link>
                </div>

            </Container>}
            {isTabletOrMobile && <Container
                sx={{
                    position: "aboslute",
                    bottom: "auto",
                    background: "#001B29",
                    justifyContent: "center",
                    display: "flex"
                }}>
                <Typography variant="h6" fontFamily={"sans-serif"} color={'whitesmoke'}>&copy; All Images</Typography>
                <div className={classes.footerLinks}>
                    <Link sx={{pl:1}} underline="none" href={urlLi} ><AiFillLinkedin size={30} /></Link>
                    <Link sx={{pl:1}} underline="none" href={urlGit} ><AiFillGithub size={30} /></Link>
                </div>

            </Container>}

        </div>


    );
}

export default Footer;