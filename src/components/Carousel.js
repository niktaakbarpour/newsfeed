import React from "react";
import image1 from './black';
import {makeStyles} from "@material-ui/core/styles";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const useStyles = makeStyles((theme) => ({

        container: {
            // width: "100%",
            // margin: "auto",
            // marginBottom: theme.spacing(2),
            // marginTop: theme.spacing(2)
        }
    })
);

export default function Carousell() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <Carousel>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={image1} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}