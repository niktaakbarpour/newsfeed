import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
        root: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3)
        },
        item: {
            cursor: "pointer"
        },
        image: {
            width: '100%',
            height: 500
        },
        textContainer: {
            position: "absolute",
            bottom: 0,
            paddingTop: theme.spacing(20),
            paddingBottom: theme.spacing(4),
            width: "100%",
            background: "linear-gradient(rgba(0,0,0,0), rgba(0,0,0,1))",
            color: "#fff",
            padding: "10px",
            fontSize: "12px",
            textAlign: "start",
        }
    })
);

export default function CustomizedCarousel({items}) {
    const classes = useStyles();
    const history = useHistory()

    const onNewsClick = (news) => {
        //ROUTING
        window.open(news.link, '_blank')
    }

    return (
        <div className={classes.root}>
            <Carousel autoPlay showStatus={false} showArrows={false} showThumbs={false} infiniteLoop>
                {
                    items.map(news => (
                        <div className={classes.item} key={news.id} onClick={onNewsClick.bind(null, news)}>
                            <img className={classes.image} src={news.pictureUrl} alt={news.title}/>
                            <div className={classes.textContainer}>
                                <h1>{news.title}</h1>
                                <p>{news.description}</p>
                            </div>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}