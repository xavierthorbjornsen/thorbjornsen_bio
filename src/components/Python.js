import { Paper } from "@mui/material";
import React from "react";
import python from "../static/images/python.png";

export default function Python() {
    return (
        <div>
            <Paper
                sx={{
                    width:700,
                    height: 700,
                    backgroundImage: `url(${python})`,
                    backgroundRepeat: "repeat",
                    opacity: 0.9,
                }}
            >z
                
            </Paper>
        </div>
    );
}
