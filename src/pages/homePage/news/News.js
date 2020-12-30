import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
        root: {
            maxWidth: 345,
        },
        cardContainer: {
            display: "flex",
            flexDirection: "column",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(2),
            borderRadius: theme.spacing(2),
            cursor: "pointer",
            maxWidth: 345
        }
    })
);

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer}>
            <img alt="monster" src={`https://robohash.org/${props.n.id}?set=set2&size=180x180`}/>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.n.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.n.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
