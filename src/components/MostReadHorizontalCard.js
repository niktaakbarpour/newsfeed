import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from "@material-ui/icons/Schedule";
import {formatDate} from "../util/Utils";

const useStyles = makeStyles((theme) => ({

        cardContainer: {
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            height: theme.spacing(15),
            // width: theme.spacing(40)
        },
        cardActionArea: {


            // justifyContent: "flex-start",
            // width: "100%"
        },
        oval: {
            border: "1px solid red",
            borderRadius: theme.spacing(10),
            backgroundColor: theme.palette.secondary.main,
            width: theme.spacing(12),
            float: "left"
        },
        timeContainer: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center",
            float: "right"
        },
        cardContent: {
            width: "100%"
        },
        categoryName: {
            color: theme.palette.text.reverse,
            margin: "auto",
            textAlign: "center"
        },
        dateAndCategory: {
            display: "block"
        }
    })
);

export default function MostReadHorizontalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <img width={100} alt={item.title} src={item.pictureUrl}/>
            <CardActionArea className={classes.cardActionArea}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.dateAndCategory}>
                        <div className={classes.oval}>
                            <Typography className={classes.categoryName}>
                                {item.category.name}
                            </Typography>
                        </div>
                        <div className={classes.timeContainer}>
                            <ScheduleIcon color="disabled"/>
                            <p>{formatDate(item.pubDate)}</p>
                        </div>
                    </div>
                    <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.title}
                        </Typography>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
