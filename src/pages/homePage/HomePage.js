import React, {useEffect} from 'react';
import SideBar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import NewsList from "./newsList/NewsList";

const useStyles = makeStyles((theme) => ({
    hr: {
        color: "red",
        height: "10px",
        backgroundColor: "red",
        width: "100%",
        display: "inline-flex",
    },
    categoryContainer: {
        width: "70%",
    },
    moreButton: {
        float: "right"
    },
    title: {
        fontFamily: "Staatliches",
        fontSize: "50px",
        marginBottom: "-20px",
        marginTop: "-20px"
    },
    titleAndMoreButtonContainer: {
        display: "flex",
        justifyContent: "space-between"
    }
}));

function HomePage() {
    const classes = useStyles();
    const [news, setNews] = React.useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => setNews(users));
    }, [])

    return (
        <div>
            <Header/>
            <SideBar/>
            <div className={classes.categoryContainer}>
                <div className={classes.titleAndMoreButtonContainer}>
                <p className={classes.title}>CoronaVirus</p>
                <Button className={classes.moreButton} variant="contained" color="secondary">
                    More +
                </Button>
                </div>
                <hr className={classes.hr}/>
                <NewsList news={news} />
            </div>
        </div>
    );
}

export default HomePage;
