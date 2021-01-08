import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({
        container: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3)
            // width: "100%",
            // margin: "auto",
            // marginBottom: theme.spacing(2),
            // marginTop: theme.spacing(2)
        }
    })
);

export default function CustomizedCarousel({items}) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Carousel autoPlay showStatus={false} showArrows={false} showThumbs={false} infiniteLoop>
                {
                    items.map(item => (
                        <div>
                            <img src={item.link} alt={item.title}/>
                            <p className="legend">{item.title}</p>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}