import React from 'react';
import Category from "../components/Category";
import {useSelector} from "react-redux";
import ReactPlaceholder from "react-placeholder";
import CategoriesPlaceHolder from "../placeholders/CategoriesPlaceHolder";
import Grid from "@material-ui/core/Grid";
import FollowUs from "../components/FollowUs";
import Carousel from "../components/Carousel";


export default function HomePage() {
    const categories = useSelector(state => state.categories.list)
    return (
        <div>
            <ReactPlaceholder
                showLoadingAnimation={true}
                ready={categories.length !== 0}
                customPlaceholder={<CategoriesPlaceHolder count={3}/>}
            >
                {/*<Grid container spacing={2}>*/}
                {/*    <Grid item xs={1}>*/}

                {/*    </Grid>*/}
                {/*    <Grid item xs={11}>*/}
                {/*        <FollowUs/>*/}
                {/*    </Grid>*/}
                {/*</Grid>*/}

                <Grid container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid container item xs={10}>
                        <Grid item xs={5}>
                            <FollowUs/>
                        </Grid>
                        <Grid item xs={7}>
                        </Grid>

                        <Carousel/>
                    </Grid>
                </Grid>
                {
                    categories.map(category => <Category key={category.id} category={category}/>)
                }

            </ReactPlaceholder>
        </div>
    )
}