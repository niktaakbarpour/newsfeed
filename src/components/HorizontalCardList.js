import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import VerticalCard from "./VerticalCard";

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: theme.spacing(2)
        }
    })
);
export default function HorizontalCardList({items}) {
    const classes = useStyles();
    console.log(items)
    return (
        <div className={classes.cardList}>
            {
                items.map(item =>
                    <VerticalCard key={item.id} item={item}/>
                )
            }
        </div>
    )
}

