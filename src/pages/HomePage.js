import React from 'react';
import Category from "../components/Category";
import {useSelector} from "react-redux";
import ReactPlaceholder from "react-placeholder";
import HomePagePlaceHolder from "../placeholders/HomePagePlaceHolder";
import FollowUs from "../components/FollowUs";
import CustomizedCarousel from "../components/CustomizedCarousel";
import {sortNewsByDate} from "../util/Utils";

export default function HomePage() {
    const categories = useSelector(state => state.categories.list)
    const carouselItems = sortNewsByDate(useSelector(state => state.collections.carousel.list))
    const isCategoryLoading = useSelector(state => state.categories.isLoading)

    return (
        <div>
            <FollowUs/>
            <CustomizedCarousel items={carouselItems}/>
            <ReactPlaceholder
                showLoadingAnimation={true}
                ready={!isCategoryLoading}
                customPlaceholder={<HomePagePlaceHolder/>}
            >
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }
            </ReactPlaceholder>
        </div>
    )
}