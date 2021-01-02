import React from "react";
import {Card, CardActionArea, CardContent, IconButton, TextField} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

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
export default function DrawerContent({sources}) {
    const classes = useStyles()
    return (
        <div>
            <form className={classes.form} noValidate autoComplete="off">
                <TextField
                    className={classes.input}
                    name="link"
                    variant="outlined"
                    label="Link"
                    type='search'
                />
                <IconButton>
                    +
                </IconButton>
            </form>
            <List>
                {sources.map((text, index) => (
                    <ListItem key={index}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {text}
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