import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MostReadVerticalCardList from "./MostReadVerticalCardList";
import {useSelector} from "react-redux";
import {sortNewsByDate} from "../util/Utils";

const useStyles = makeStyles((theme) => ({
        title: {
            marginTop: theme.spacing(0),
            marginLeft: theme.spacing(1)
        }
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
            <h3 className={classes.title}>Most Read</h3>
            <MostReadVerticalCardList items={mostReadNews} onClick={onItemClick}/>
        </div>)
}