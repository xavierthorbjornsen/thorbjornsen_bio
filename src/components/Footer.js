
import { Container,Typography } from "@mui/material/";
import { makeStyles } from "@mui/styles";
import React from "react";


const useStyles = makeStyles((theme) => ({

    footer: {
        backgroundColor: '#001B29',

    }

}))


function Footer() {
    const classes = useStyles();
    return (

        <div className={classes.footer}>
            <Container
                sx={{
                    position: "aboslute",
                    bottom: "auto",
                    background: "#001B29",
                    

                }}>
                <Typography variant="h6" color={'whitesmoke'} >@CopyRight images</Typography>
            </Container>

        </div>


    );
}

export default Footer;