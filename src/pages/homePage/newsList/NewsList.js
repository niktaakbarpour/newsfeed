import React from 'react';
import News from "../news/News";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
        cardList: {
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridGap: theme.spacing(2)
        }
    })
);
const NewsList = props => {
    const classes = useStyles();

    return (
        <div className={classes.cardList}>
            {
                props.news.map(n =>
                    <News key={n.id} n={n}/>
                )
            }
        </div>
    )
}

export default NewsList;