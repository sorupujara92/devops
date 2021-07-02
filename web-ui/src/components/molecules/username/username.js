import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles,FormControl ,Typography} from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    label: {
        color: "#333333",
        fontSize: "12px",
        paddingBottom: "8px",
        float:"left",
        alignSelf:"baseline"
    },
    textField: {
        paddingBottom: "9px"
    }
}));


const Username = ({label, placeHolder,username,onChange}) => {
    const classes = useStyles();
    return(
        <FormControl fullWidth className={classes.textField} >
            <Typography className={classes.label} data-testid="usernameLabel">
                {label}
            </Typography>
            <TextField
                fullWidth
                required
                type="text"
                inputProps={{
                    "data-testid": "username"
                }}
                placeholder={placeHolder}
                onChange={onChange}
                value={username}>
            </TextField>
        </FormControl>
    );
};

Username.defaultProps={
    label:"Username",
    placeHolder:"Enter name",
    username:""
};
Username.propTypes={
    label:PropTypes.string,
    placeHolder:PropTypes.string,
    username:PropTypes.string,
    onChange:PropTypes.func.isRequired
};

export default Username;