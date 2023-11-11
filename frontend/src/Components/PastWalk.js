import * as React from "react";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

export default function PastWalk(props) {
    return (
        <>
            <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={1}
            >

                <img src={props.itinary} alt="logo" style={{ maxHeight: "10vh" }} />
                <Stack
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <h4>{props.dogName}</h4>
                    <p>{props.walkDate} - {props.walkDistance}</p>
                    <p>{props.startHour} - {props.endHour} ({props.walkDuration})</p>
                </Stack>
            </Stack>
            <Divider sx={{ marginTop: "1vh", marginBottom: "1vh" }} />
        </>

    );
}