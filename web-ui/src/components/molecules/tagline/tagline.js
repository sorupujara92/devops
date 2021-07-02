import React from "react";  
import { makeStyles,Grid,Typography} from "@material-ui/core";
import * as Constants from "../../../constants";

const useStyles = makeStyles((theme) => ({
    remember: {
        color: "#ffffff",
        fontWeight: "600",
        fontSize: "48px",
        paddingLeft:"121px",
        width: "559px",
        height: "134px",
        textAlign:"left",
        position:"fixed",
        left: "0"
    }
}));

const Tagline = () => {
    const classes = useStyles();
    return (
        <Grid item>
            <Typography
                variant="h1"
                className={classes.remember}
                data-testid="taglineText">
                {Constants.TAG_LINE}
            </Typography>
        </Grid>
    );
}

export default Tagline;