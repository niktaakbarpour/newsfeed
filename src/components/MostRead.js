import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MostReadVerticalCardList from "./MostReadVerticalCardList";
import {useSelector} from "react-redux";
import {sortNewsByDate} from "../util/Utils";

const useStyles = makeStyles((theme) => ({
        title: {
            marginTop: theme.spacing(-1),
            marginLeft: theme.spacing(1),
            marginBottom: theme.spacing(-1)
        },
    hr: {
        color: theme.palette.secondary.main,
        height: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
        width: "100%",
        display: "inline-flex",
    },
    })
);

export default function MostRead() {
    const classes = useStyles();
    const mostReadNews = sortNewsByDate(useSelector((state) => state.collections.mostRead.list))
    const onItemClick = (news) => {
        window.open(news.link, '_blank')
    }

    return (
        <div>
            <h2 className={classes.title}>Most Read</h2>
            <hr className={classes.hr}/>
            <MostReadVerticalCardList items={mostReadNews} onClick={onItemClick}/>
        </div>)
}