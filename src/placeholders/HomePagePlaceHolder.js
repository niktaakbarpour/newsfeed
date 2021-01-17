import React from "react";
import CategoryPlaceHolder from "./CategoryPlaceHolder";
import {RectShape} from "react-placeholder/lib/placeholders";
import {useTheme} from "@material-ui/core";

const useClasses = () => {
    const theme = useTheme()
    return {
        carousel: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(3),
            width: "100%",
            height: 400
        }
    }
}

export default function HomePagePlaceHolder() {
    const items = [1, 2, 3]
    const classes = useClasses()
    const theme = useTheme()
    return (
        <div>
            <RectShape style={classes.carousel} color={theme.palette.placeHolder.main}/>
            {
                items.map((index) => <CategoryPlaceHolder key={index}/>)
            }
        </div>
    )
}