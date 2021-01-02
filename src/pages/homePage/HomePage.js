import React from 'react';
import Header from "../../components/header/Header";
import NaveBar from "../../components/navbar/Navbar";
import CategoriesList from "./CategoriesList";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import CategoryPage from "../categoryPage/CategoryPage";

const categories = [{
    id: 1,
    title: 'Sports'
}, {
    id: 2,
    title: 'Politics'
}, {
    id: 3,
    title: "Economy"
}]

export default function HomePage() {
    return (
        <div>
            <Header/>
            <NaveBar categories={categories}>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <CategoriesList categories={categories}/>
                        </Route>
                        <Route exact path="/category">
                            <CategoryPage/>
                        </Route>
                    </Switch>
                </Router>
            </NaveBar>
        </div>
    );
}