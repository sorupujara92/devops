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



const Email = ({label, placeHolder,userEmail,onChange}) => {
    const classes = useStyles();
    return(
        <FormControl fullWidth className={classes.textField} >
            <Typography className={classes.label} data-testid="emailLabel">
                {label}
            </Typography>
            <TextField
                inputProps={{
                    "data-testid": "email"
                }}
                fullWidth
                required
                type="text"
                placeholder={placeHolder}
                onChange={onChange}
                value={userEmail}>
            </TextField>
        </FormControl>
    );
};

Email.defaultProps={
    label:"Email",
    placeHolder:"Enter email",
    userEmail:""
};
Email.propTypes={
    label:PropTypes.string,
    placeHolder:PropTypes.string,
    userEmail:PropTypes.string,
    onChange:PropTypes.func.isRequired
};

export default Email;