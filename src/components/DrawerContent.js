import React, {useEffect, useState} from "react";
import {Card, CardActionArea, CardContent, IconButton, TextField} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";

const useStyles = makeStyles((theme) => ({
        form: {
            '& > *': {
                justifyContent: "space-evenly",
            },
            justifyContent: "space-evenly",
            display: "flex"
        },
        input: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(1),
            marginLeft: theme.direction === 'ltr' ? theme.spacing(1) : 0,
            marginRight: theme.direction === 'rtl' ? theme.spacing(1) : 0,
        },
        card: {
            display: "flex",
            flexDirection: "row",
            boxShadow: theme.shadows[4],
            borderRadius: theme.spacing(1),
            cursor: "pointer",
        }
    })
)
export default function DrawerContent() {
    const classes = useStyles()
    const [feeds, setFeeds] = useState([])

    useEffect(() => {
        //API
        axios.get(`${BASE_URL}/api/feeds`)
            .then((response) => {
                setFeeds(response.data)
            })
    })

    const addNewSource = () => {
        const categoryName = ""
        const categoryColor = "#FF0000"
        const feedName = ""
        const feedUrl = ""
        const category = {
            id: 0,
            name: categoryName,
            color: categoryColor
        }
        const newFeed = {
            id: 0,
            name: feedName,
            url: feedUrl,
            category: category
        }
        //API
        axios.post(`${BASE_URL}/api/feeds`, JSON.stringify(newFeed))
    }

    const onSourceClicked = (item) => {

    }

    return (
        <div>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    id="sourceName"
                    className={classes.input}
                    name="link"
                    variant="outlined"
                    label="Link"
                    type='search'
                />
                <IconButton onClick={addNewSource}>
                    +
                </IconButton>
            </form>
            <List>
                {feeds.map((feed, index) => (
                    <ListItem key={index}>
                        <Card className={classes.card}>
                            <CardActionArea onClick={onSourceClicked.bind(null, feed)}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {feed.name}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}