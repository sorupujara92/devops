import React from "react";
import { Redirect,useHistory } from "react-router-dom";

const DefaultPage = () => {
    const history=useHistory();
    const token=localStorage.getItem('accessToken');
    function handleToken(){
        if(token){
            history.push("/tasks");
        }
        else{
            history.push("/login");
        }
    };  
    return(
        <div>
            {handleToken()}
        </div>
    );
}
export default DefaultPage;