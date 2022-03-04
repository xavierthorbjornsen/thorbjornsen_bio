import { Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import About from './About';
import { makeStyles } from "@mui/styles";
import Experience from "./Experience";
import Contact from "./Contact";
import Timeline from "./Timeline";
import Footer from "./Footer"

const useStyles = makeStyles((theme)=> ({
    app:{
        

    }
}))


export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.app}>
            <Container>
                <Navbar />
                <Section
                    title="About Me "
                    subtitle={<About />}
                    dark={1}
                    id="About"
                ></Section>
                <Section
                    title="My Experience"
                    subtitle={<Experience />}
                    dark={2}
                    id="Experience"
                ></Section>
                <Section
                    title="My Roadmap"
                    subtitle={<Timeline />}
                    dark={3}
                    id="TimeLine"
                ></Section>
                <Section
                    title="Contact me"
                    subtitle={<Contact />}
                    dark={4}
                    id="Contact"
                ></Section>
                <Footer/>
            </Container>
        </div>

    );
}
