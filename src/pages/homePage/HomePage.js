import React, {useEffect} from 'react';
import SideBar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {makeStyles} from "@material-ui/core/styles";
import CategoriesList from "./CategoriesList";

const useStyles = makeStyles((theme) => ({}));

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
            <CategoriesList news={news}/>
        </div>
    );
}

export default HomePage;
