import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import MostReadVerticalCardList from "./MostReadVerticalCardList";
import {useSelector} from "react-redux";

const useStyles = makeStyles((theme) => ({
        title: {
            marginTop: theme.spacing(0),
            marginLeft: theme.spacing(1)
        }
    })
);

export default function MostRead() {
    const classes = useStyles();
    const mostReadNews = useSelector((state) => state.collections.mostRead.list)

    return (
        <div>
            <h3 className={classes.title}>Most Read</h3>
            <MostReadVerticalCardList items={mostReadNews}/>
        </div>)
}