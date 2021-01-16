import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';
import {formatDate} from "../util/Utils";

const useStyles = makeStyles((theme) => ({
        cardContainer: {
            display: "flex",
            flexDirection: "column",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            maxWidth: theme.spacing(43),
            position: "relative",
            height: theme.spacing(60)

        },
        timeContainer: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            position: "absolute",
            bottom: "0",
            marginTop: theme.spacing(2)
        },
        image: {
            width: "100%",
            height: theme.spacing(30)
        },
    cardContent: {
        padding: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.placeHolder.secondary
        },
        height: "100%"
    },
    text: {
            textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        WebkitLineClamp: "3",
        display: "-webkit-box",
        WebkitBoxOrient: 'vertical',
    }
    // cardAction: {
    //         height: "100%"
    // }
    })
);

export default function VerticalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <img className={classes.image} alt={item.title} src={item.pictureUrl}/>
            {/*<CardActionArea className={classes.cardAction}>*/}
            {/*    <CardContent className={classes.cardContent}>*/}
            <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h5">
                        {item.title}
                    </Typography>
                    <Typography className={classes.text} variant="body2" color="textSecondary" component="p">
                        {item.description}
                    </Typography>
                    <div className={classes.timeContainer}>
                        <ScheduleIcon color="disabled"/>
                        <p>{formatDate(item.pubDate)}</p>
                    </div>
            </div>
                {/*</CardContent>*/}
            {/*</CardActionArea>*/}
        </Card>
    );
}
