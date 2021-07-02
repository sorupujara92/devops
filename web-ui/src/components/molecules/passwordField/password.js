import React from "react";
import { Input } from "@material-ui/core";
import { makeStyles,FormControl,IconButton,Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    label: {
        color: "#333333",
        fontSize: "12px",
        marginBottom: "10px",
        paddingTop:"21px",
        float:"left",
        alignSelf:"baseline"
    },
    textField: {
        paddingBottom: "8px",
    }
}));
const Password = ({label,placeHolder,userPassword,onChange}) => {
    const classes = useStyles();
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return(
        <FormControl fullWidth className={classes.textField}>
            <Typography className={classes.label} data-testid="passwordLabel">
                {label}
            </Typography>
            <Input
                required
                inputProps={{
                    "data-testid": "password"
                }}
                type={showPassword ? "text" : "password"}
                placeholder={placeHolder}
                value={userPassword}
                onChange={onChange}
                endAdornment={
                    <IconButton style={{padding:'0px'}}
                        onClick={handleClickShowPassword}
                    >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                }
            />
        </FormControl>
    );
};

Password.defaultProps={
    label:"Password",
    placeHolder:"Enter Password",
    userPassword:""
};
Password.propTypes={
    label:PropTypes.string,
    placeHolder:PropTypes.string,
    userPassword:PropTypes.string,
    onChange:PropTypes.func.isRequired
};
export default Password;