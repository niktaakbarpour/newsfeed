import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './News.css';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

export default function ImgMediaCard(props) {
    const classes = useStyles();

    return (
        <Card className='card-container'>
            <CardActionArea>
                <img alt="monster" src={`https://robohash.org/${props.n.id}?set=set2&size=180x180`} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.n.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.n.email}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
}
