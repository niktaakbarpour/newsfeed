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
            width: theme.spacing(40)
        },

        textFieldContainer: {
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
            marginBottom: theme.spacing(2),
            margin: "auto"
        },
        oval: {
            border: "1px solid red",
            borderRadius: theme.spacing(10),
            backgroundColor: theme.palette.secondary.main,
            width: theme.spacing(14),
            float: "right",
            marginBottom: theme.spacing(1),
            marginTop: theme.spacing(1)
        },
        categoryName: {
            color: theme.palette.text.reverse,
            margin: "auto",
            textAlign: "center"
        },
        link: {
            wordWrap: "break-word"
        }
    })
)
export default function DrawerContent() {
    const classes = useStyles()
    const [feeds, setFeeds] = useState([])
    const [selectedColor, selectColor] = useState('#F44336')

    useEffect(() => {
        //API
        axios.get(`${BASE_URL}/api/feeds`)
            .then((response) => {
                setFeeds(response.data)
            })
    }, [])

    const addNewSource = () => {
        const feedName = document.getElementById('feedName')
        const categoryName = document.getElementById('feedCategory')
        const feedUrl = document.getElementById('feedLink')
        if (!(feedName.value && categoryName.value && feedUrl.value)) {
            alert("Please Fill All Field.")
            return
        }
        const category = {
            id: 0,
            name: categoryName.value,
            color: selectedColor
        }
        const newFeed = {
            id: 0,
            name: feedName.value,
            url: feedUrl.value,
            category: category
        }

        //API
        axios.post(`${BASE_URL}/api/feeds`, newFeed)

        feedName.value = ""
        categoryName.value = ""
        feedUrl.value = ""
    }

    const onSourceClicked = (item) => {

    }

    return (
        <div>
            <form className={classes.form} noValidate autoComplete="off">
                <div className={classes.textFieldContainer}>
                    <TextField
                        id="feedName"
                        className={classes.input}
                        variant="outlined"
                        label="Name"
                        type='search'
                    />
                    <TextField
                        id="feedCategory"
                        className={classes.input}
                        variant="outlined"
                        label="Category"
                        type='search'
                    />
                    <TextField
                        id="feedLink"
                        className={classes.input}
                        variant="outlined"
                        label="Link"
                        type='search'
                    />
                </div>
                <div className={classes.colorPicker}>
                    <CirclePicker onChange={(color) => selectColor(color.hex)}/>
                </div>
                <Button className={classes.button} onClick={addNewSource} variant="contained" color="primary">
                    +
                </Button>
            </form>
            <List>
                {feeds.map((feed) => (
                    <ListItem key={feed.id}>
                        <Card className={classes.card}>
                            <CardContent>
                                <Typography variant="h6" component="h5">
                                    {feed.name}
                                </Typography>
                                <Typography color="textSecondary" className={classes.link}>
                                    {feed.url}
                                </Typography>
                                <div className={classes.oval}>
                                    <Typography className={classes.categoryName}>
                                        {feed.category.name}
                                    </Typography>
                                </div>
                            </CardContent>
                        </Card>
                    </ListItem>
                ))}
            </List>
        </div>
    )
}