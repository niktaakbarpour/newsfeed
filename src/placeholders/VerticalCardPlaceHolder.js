import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import {TextBlock} from 'react-placeholder/lib/placeholders';
import {useTheme} from "@material-ui/core";
import 'react-placeholder/lib/reactPlaceholder.css';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
        cardContainer: {
            backgroundColor: theme.palette.placeHolder.secondary,
            display: "flex",
            flexDirection: "column",
            boxShadow: theme.shadows[2],
            margin: theme.spacing(2),
            borderRadius: theme.spacing(2),
            maxWidth: theme.spacing(43)
        },
        image: {
            height: theme.spacing(20)
        }
    })
);


export default function VerticalCardPlaceHolder() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={clsx(classes.cardContainer, "show-loading-animation")}>
            <div className={classes.image}/>
            <CardContent>
                <TextBlock rows={3} color={theme.palette.placeHolder.main}/>
            </CardContent>
        </Card>
    );
}