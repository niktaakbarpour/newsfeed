import React from 'react';
import Header from "../../components/header/Header";
import NaveBar from "../../components/navbar/Navbar";
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
            <NaveBar categories={categories}/>
            <CategoriesList categories={categories}/>
        </div>
    );
}