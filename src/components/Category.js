import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import HorizontalCardList from "./HorizontalCardList";
import {useHistory} from "react-router-dom";
import ReactPlaceholder from "react-placeholder";
import HorizontalCardListPlaceHolder from "../placeholders/HorizontalCardListPlaceHolder";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {useDispatch} from "react-redux";
import {addCarouselItem} from "../actions/carouselActions";

const useStyles = makeStyles((theme) => ({
        hr: {
            color: theme.palette.secondary.main,
            height: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
            width: "100%",
            display: "inline-flex",
        },
        categoryContainer: {
            marginBottom: theme.spacing(4)
        },
        moreButton: {
            float: "right"
        },
        title: {
            fontFamily: "Staatliches",
            fontSize: "50px",
            marginBottom: theme.spacing(-2),
            marginTop: theme.spacing(-2),
            marginLeft: theme.spacing(3)
        },
        titleAndMoreButtonContainer: {
            display: "flex",
            justifyContent: "space-between"
        }
    })
);

export default function Category({category}) {
    const classes = useStyles();
    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {
        //API
        axios.get(`${BASE_URL}/api/categories/${category.id}/news`)
            .then((response) => {
                setLoading(false)
                setNews(response.data.slice(0, 3))
                dispatch(addCarouselItem(response.data[0]))
            })
    }, [])

    const handleClickMore = () => {
        //ROUTING
        history.push(`/${category.name.toLowerCase()}`)
    }

    const onItemClicked = (item) => {
        //ROUTING
        history.push(`/${category.name.toLowerCase()}/${item.id}`)
    }

    return (
        <div className={classes.categoryContainer}>
            <div className={classes.titleAndMoreButtonContainer}>
                <p className={classes.title}>{category.name}</p>
                <Button className={classes.moreButton} variant="contained" color="secondary" onClick={handleClickMore}>
                    More +
                </Button>
            </div>
            <hr className={classes.hr}/>
            <ReactPlaceholder ready={!loading} customPlaceholder={<HorizontalCardListPlaceHolder count={3}/>}>
                <HorizontalCardList items={news} onClick={onItemClicked}/>
            </ReactPlaceholder>
        </div>
    );
}