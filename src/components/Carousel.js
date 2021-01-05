import React from "react";
import image1 from './black';
import 'bootstrap/dist/css/bootstrap.min.css';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

container: {
    width: "100%",
    margin: "auto",
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(6)
}
    })
);

export default function Carousel() {
    const classes = useStyles();
    return (
        <div className={classes.container}>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <ol className="carousel-indicators">
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active">1</li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1">2</li>
                <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2">3</li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={image1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </div>
                </div>
            </div>
            <a className="carousel-control-prev"  role="button" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" href="#carouselExampleCaptions" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next"  role="button" data-bs-slide="next">
                <span className="carousel-control-next-icon" href="#carouselExampleCaptions" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </a>
        </div>
        </div>
    )
}