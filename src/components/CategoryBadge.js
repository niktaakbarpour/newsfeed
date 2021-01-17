import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import clsx from "clsx";

const useStyle = (color) => (makeStyles((theme) => ({
        oval: {
            borderRadius: theme.spacing(2),
            backgroundColor: color,
            display: "inline-block",
            padding: theme.spacing(0, 1, 0, 1)
        },
        categoryName: {
            color: theme.palette.text.reverse,
        }
    })
))()

export default function CategoryBadge({className, text, color}) {
    const classes = useStyle(color)

    return (
        <div className={clsx(classes.oval, className)}>
            <Typography variant="p6" className={classes.categoryName}>
                {text}
            </Typography>
        </div>
    )
}