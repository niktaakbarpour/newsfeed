import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

        cardContainer: {
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(2),
            cursor: "pointer",
            height: theme.spacing(15)
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
        date: {
            float: "right"
        },
        cardContent: {
            width: "100%"
        },
        categoryName: {
            margin: "auto"
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
            <img alt="monster" src={`https://robohash.org/${item.id}?set=set2&size=120x120`}/>
            <CardActionArea className={classes.cardActionArea}>
                <CardContent className={classes.cardContent}>
                    <div className={classes.dateAndCategory}>
                        <div className={classes.oval}>
                            <Typography className={classes.categoryName}>
                                business
                            </Typography>
                        </div>
                        <div className={classes.date}>
                            <Typography gutterBottom variant="h5" component="h2">
                                date
                            </Typography>
                        </div>
                    </div>
                    <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            {item.name}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
