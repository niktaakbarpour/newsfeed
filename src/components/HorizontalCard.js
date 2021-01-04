import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: theme.spacing(43),
        },
        cardContainer: {
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(2),
            marginLeft: theme.spacing(4),
            borderRadius: theme.spacing(2),
            cursor: "pointer",
            // [theme.breakpoints.down('md')]: {
            //     maxWidth: theme.spacing(80)
            // },
            // [theme.breakpoints.down('sm')]: {
            //     maxWidth: theme.spacing(60)
            // },
            // [theme.breakpoints.down('xs')]: {
            //     maxWidth: theme.spacing(40)
            // },
        },
        cardActionArea: {
            display: "flex",
            alignItems: "end",
            justifyContent: "flex-start"
        }
    })
);

export default function HorizontalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <img alt="monster" src={`https://robohash.org/${item.id}?set=set2&size=200x200`}/>
            <CardActionArea className={classes.cardActionArea}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {item.email}
                    </Typography>
                </CardContent>

            </CardActionArea>
        </Card>
    );
}
