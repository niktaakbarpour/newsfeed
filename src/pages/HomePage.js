import React, {useEffect} from 'react';
import Header from "../components/Header";
import NaveBar from "../components/Navbar";
import CategoriesList from "../components/CategoriesList";
import {Route, Switch} from "react-router-dom";
import CategoryPage from "./CategoryPage";
import {Drawer} from "@material-ui/core";
import DrawerContent from "../components/DrawerContent";
import {useDispatch, useSelector} from "react-redux";
import {closeDrawer} from "../actions/drawerActions";
import {makeStyles, useTheme} from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import NewsPage from "./NewsPage";
import {setCategories} from "../actions/categoriesActions";
import {addSource} from "../actions/newsSourceActions";

const useStyles = makeStyles((theme) => ({
        drawer: {
            flexShrink: 0,
        },
        drawerPaper: {},
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        }
    })
)

export default function HomePage() {
    const isDrawerOpen = useSelector(state => state.drawer.isOpen)
    const dispatch = useDispatch()
    const classes = useStyles();
    const theme = useTheme();

    useEffect(() => {
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
        dispatch(setCategories(categories))
        //TODO: getCategories from server
        dispatch(addSource("https://bbc.com/"))
    })

    return (
        <div>
            <Drawer
                className={classes.drawer}
                variant="temporary"
                anchor="left"
                open={isDrawerOpen}
                onClose={() => dispatch(closeDrawer())}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader}>
                    <IconButton onClick={() => dispatch(closeDrawer())}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <DrawerContent/>
            </Drawer>
            <Header/>
            <NaveBar/>
            <Switch>
                <Route exact path="/">
                    <CategoriesList/>
                </Route>
                <Route path="/:category">
                    <CategoryPage/>
                </Route>
                <Route path="/:category/:newsId">
                    <NewsPage/>
                </Route>
            </Switch>
        </div>
    );
}