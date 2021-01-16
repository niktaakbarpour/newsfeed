import React, {useEffect, useState} from "react";
import {Card, CardContent, TextField} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import axios from "axios";
import {BASE_URL} from "../constants/Constants";
import {CirclePicker} from 'react-color'
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
        form: {
            '& > *': {
                justifyContent: "space-evenly",
            },
            // justifyContent: "space-evenly",
            display: "flex",
            flexDirection: "column",
            margin: theme.spacing(2)
        },
        input: {
            marginTop: theme.spacing(1),
            marginBottom: theme.spacing(1),
            marginLeft: theme.direction === 'ltr' ? theme.spacing(1) : 0,
            marginRight: theme.direction === 'rtl' ? theme.spacing(1) : 0,
        },
        card: {
            boxShadow: theme.shadows[4],
            borderRadius: theme.spacing(1),
            margin: theme.spacing(1),
        },
        textfieldContainer: {
            marginBottom: theme.spacing(2),
            display: "flex",
            flexDirection: "column",
        },
        button: {
            display: "block",
            margin: "auto",
            width: "max-content",

        },
        colorPicker: {
            marginBottom: theme.spacing(2)
        },
        oval: {
            border: "1px solid red",
            borderRadius: theme.spacing(10),
            backgroundColor: theme.palette.secondary.main,
            width: theme.spacing(12),
            float: "left"
        },
        categoryName: {
            color: theme.palette.text.reverse,
            margin: "auto",
            textAlign: "center"
        },
        nameAndCategory: {
            display: "flex",
            justifyContent: "space-between"
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
                <div className={classes.textfieldContainer}>
                    <TextField
                        id="sourceName"
                        className={classes.input}
                        name="link"
                        variant="outlined"
                        label="Link"
                        type='search'
                    />
                    <TextField
                        id="sourceName"
                        className={classes.input}
                        name="link"
                        variant="outlined"
                        label="Name"
                        type='search'
                    />
                    <TextField
                        id="sourceName"
                        className={classes.input}
                        name="link"
                        variant="outlined"
                        label="Category"
                        type='search'
                    />
                </div>
                <div className={classes.colorPicker}>
                    <CirclePicker/>
                </div>
                <Button className={classes.button} onClick={addNewSource} variant="contained" color="primary">
                    +
                </Button>
            </form>
            {/*<List>*/}
            {/*    {feeds.map((feed, index) => (*/}
            {/*        <ListItem key={index}>*/}
            {/*            <Card className={classes.card}>*/}
            {/*                <CardActionArea onClick={onSourceClicked.bind(null, feed)}>*/}
            {/*                    <CardContent>*/}
            {/*                        <Typography gutterBottom variant="h5" component="h2">*/}
            {/*                            {feed.name}*/}
            {/*                        </Typography>*/}
            {/*                    </CardContent>*/}
            {/*                </CardActionArea>*/}
            {/*            </Card>*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}

            <List>
                {feeds.map((feed, index) => (
                    <ListItem key={index}>
                        <Card className={classes.card}>
                            <CardActionArea onClick={onSourceClicked.bind(null, feed)}>
                                <CardContent>
                                    <div className={classes.nameAndCategory}>
                                        <Typography variant="h6" component="h5">
                                            {feed.name}
                                        </Typography>
                                        <div className={classes.oval}>
                                            <Typography className={classes.categoryName}>
                                                business
                                            </Typography>
                                        </div>
                                    </div>
                                    <Typography color="textSecondary">
                                        Link
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