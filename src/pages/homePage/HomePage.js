import React from 'react';
import SideBar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import CategoriesList from "./CategoriesList";

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
            <SideBar/>
            <CategoriesList categories={categories}/>
        </div>
    );
}