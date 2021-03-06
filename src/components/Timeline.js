import React from "react";
import { makeStyles } from "@mui/styles";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { useMediaQuery } from 'react-responsive';
import { List, ListItem } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';

const useStyles = makeStyles((theme) => ({
    timelineRoot: {
        display: 'block',
        height: '1121px',
    },
    sectionTimelineAlternate: {
        float: 'left',
        paddingTop: 200,
    },
    sectionTimeLineLeft: {
        padding: 2,
    }
}))



export default function TimeLine() {
    const classes = useStyles();

    const isMonitor = useMediaQuery({ query: '(min-width: 1433px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1432px)' })
    return (
        <div className={classes.timelineRoot}>
            {isMonitor && <div className={classes.sectionTimelineAlternate}><Timeline position="alternate">
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
                <TimelineItem>
                    <TimelineOppositeContent color="black">
                    Chief Technical Officer - ARRQ
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>2021 - 2022</TimelineContent>
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
                    Bachelors in Information Technology
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>2016 - 2020</TimelineContent>
                </TimelineItem>
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
            </Timeline></div>}
            {isTabletOrMobile && <div className={classes.sectionTimeLineLeft}>
                <List sx={{ color: "white",}} >
                <ListItem> <ListItemIcon><TimelineDot /></ListItemIcon>2021 - 2022 Chief Technical Officer - ARRQ</ListItem>
                <ListItem><ListItemIcon><TimelineDot /></ListItemIcon>2020 - 2021 System Engineer - NEC</ListItem>
                <ListItem><ListItemIcon><TimelineDot /></ListItemIcon>2016 - 2020  Bachelors in Information Technology </ListItem>
                <ListItem><ListItemIcon><TimelineDot /></ListItemIcon>2010 - 2016 Light Vehicle Mechanic</ListItem>
            </List>
            </div>}
        </div>
    )
}