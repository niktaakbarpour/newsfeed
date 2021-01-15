import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ScheduleIcon from '@material-ui/icons/Schedule';

const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: theme.spacing(43),
        },
        cardContainer: {
            display: "flex",
            flexDirection: "column",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            maxWidth: theme.spacing(43),
        },
        timeContainer: {
            display: "flex",
            justifyContent: "left",
            alignItems: "center"
        }
    })
);

export default function VerticalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <img alt="monster" src={`https://robohash.org/${item.id}?set=set2&size=180x180`}/>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.email}
                    </Typography>
                    <div className={classes.timeContainer}>
                        <ScheduleIcon color="disabled"/>
                        <p>date</p>
                    </div>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
