import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({

        cardContainer: {
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[8],
            margin: theme.spacing(1),
            borderRadius: theme.spacing(1),
            cursor: "pointer",
            height: theme.spacing(15)
            // width: theme.spacing(40)
        },
        oval: {
            border: "1px solid red",
            borderRadius: theme.spacing(10),
            backgroundColor: theme.palette.secondary.main,
            width: theme.spacing(12),
            float: "left",
            marginTop: "-20px"
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
            display: "flex",
            flexDirection: "column",
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1)
        },
        title: {
            fontSize: "small",
        }
    })
);

export default function MostReadHorizontalCard({item, onClick}) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer} onClick={() => onClick(item)}>
            <img width={100} alt={item.title} src={item.pictureUrl}/>
            <CardActionArea>
                {/*<CardContent className={classes.cardContent}>*/}
                <div className={classes.dateAndCategory}>
                    <div className={classes.oval}>
                        <Typography variant="p6" className={classes.categoryName}>
                            {item.category.name}
                        </Typography>
                    </div>

                    <Typography className={classes.title} gutterBottom>
                        {item.title}
                    </Typography>
                </div>
                {/*</CardContent>*/}
            </CardActionArea>
        </Card>
    );
}
