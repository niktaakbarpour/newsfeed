import React from 'react';
import Category from "../components/Category";
import {useSelector} from "react-redux";
import ReactPlaceholder from "react-placeholder";
import CategoriesPlaceHolder from "../placeholders/CategoriesPlaceHolder";
import FollowUs from "../components/FollowUs";
import CustomizedCarousel from "../components/CustomizedCarousel";

export default function HomePage() {
    const categories = useSelector(state => state.categories.list)
    const sliderItems = [
        {
            link: 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg',
            title: "test 1"
        },
        {
            link: 'https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg',
            title: "test 2"
        },
        {
            link: 'https://ogden_images.s3.amazonaws.com/www.observertoday.com/images/2020/08/29003327/SUNSET-579x840.jpg',
            title: "test 3"
        }
    ]
    return (
        <div>
            <FollowUs/>
            <ReactPlaceholder
                showLoadingAnimation={true}
                ready={categories.length !== 0}
                customPlaceholder={<CategoriesPlaceHolder count={3}/>}
            >
                <CustomizedCarousel items={sliderItems}/>
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }
            </ReactPlaceholder>
        </div>
    )
}