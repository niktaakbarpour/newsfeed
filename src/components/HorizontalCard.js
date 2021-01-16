import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from "@material-ui/icons/Schedule";
import {formatDate} from "../util/Utils";

const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: theme.spacing(43),
        },
        cardContainer: {
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            marginLeft: theme.spacing(4),
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            width: theme.spacing(100)
        },
        cardActionArea: {
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-start"
        },
        timeContainer: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center"
        }
    })
);

export default function HorizontalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <img width={200} height='200' alt={item.title} src={item.pictureUrl}/>
            <CardActionArea className={classes.cardActionArea}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                    <div className={classes.timeContainer}>
                        <ScheduleIcon color="disabled"/>
                        <p>{formatDate(item.pubDate)}</p>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
