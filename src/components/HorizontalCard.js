import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from "@material-ui/icons/Schedule";
import {formatDate} from "../util/Utils";
import imagePlaceHolder from "../assets/imagePlaceHolder.jpg";

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
            width: theme.spacing(100),
            position: "relative",
        },
        cardActionArea: {
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-start"
        },
        timeContainer: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            position: "absolute",
            bottom: "0",
        },
        placeholder: {
            width: theme.spacing(25),
            height: '100%',
        },
        image: {
            width: theme.spacing(25),
            height: '100%'
        }
    })
);

export default function HorizontalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <div className={classes.placeholder}>
                <img className={classes.image} alt={item.title}
                     src={item.pictureUrl ? item.pictureUrl : imagePlaceHolder}/>
            </div>
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
