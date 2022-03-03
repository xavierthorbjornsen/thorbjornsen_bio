import { Container } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import Section from "./Section";
import About from './About';
import { makeStyles } from "@mui/styles";
import Experience from "./Experience";

const useStyles = makeStyles((Theme)=> ({
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
                    title="About"
                    subtitle={<About />}
                    dark={false}
                    id="About"
                ></Section>
                <Section
                    title="Experience"
                    subtitle={<Experience />}
                    dark={true}
                    id="Experience"
                ></Section>
                <Section
                    title="TimeLine"
                    subtitle={<About />}
                    dark={false}
                    id="TimeLine"
                ></Section>
                <Section
                    title="Contact"
                    subtitle={<About />}
                    dark={true}
                    id="Contact"
                ></Section>
            </Container>
        </div>

    );
}
