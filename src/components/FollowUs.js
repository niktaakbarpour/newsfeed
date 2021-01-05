import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles((theme) => ({
    cardContainer: {
        display: "flex",
        flexDirection: "row",
        boxShadow: theme.shadows[2],
        margin: theme.spacing(1),
        borderRadius: theme.spacing(1),
        cursor: "pointer",
        height: theme.spacing(8),
        // width: theme.spacing(40)
    },
    cardList: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
    },
    title: {
        marginLeft: theme.spacing(1)
    }
    })
);

export default function FollowUs() {
    const classes = useStyles();

    return (
        <div>
            <h3 className={classes.title}>Follow Us</h3>
            <div className={classes.cardList}>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.date}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Facebook
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.date}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Facebook
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Card className={classes.cardContainer}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.date}>
                            <Typography gutterBottom variant="h5" component="h2">
                                Facebook
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
                <Card className={classes.cardContainer}>
                    <CardActionArea>
                        <CardContent>
                            <div className={classes.date}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Facebook
                                </Typography>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}
