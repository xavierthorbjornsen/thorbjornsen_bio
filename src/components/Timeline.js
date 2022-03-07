import React from "react";
import { makeStyles } from "@mui/styles";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'

const useStyles = makeStyles((theme) => ({
    sectionTimeline: {
        float: 'left',
        paddingTop: 200,
    }
}))

export default function TimeLine() {
    const classes = useStyles();
    return (
        <div className={classes.sectionTimeline}>
            <Timeline position="alternate">
                <TimelineItem>
                    <TimelineOppositeContent color="black">
                        2010 - 2016
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Light Vehicle Mechanic</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="black">
                        Bachelors in Information Technology
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>2016 - 2020 </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="black">
                        2020 - 2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>System Engineer - NEC </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="black">
                    Chief Techincal Officer - ARRQ 
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>2021 - 2022</TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent color="black">
                    2022 - Now  
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>Open Source Developer</TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    )
}