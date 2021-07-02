import { SET_USER } from "./actionTypes";

const setUser = (user) => ({
    type: SET_USER,
    payload: {
        user
    }
})
export const saveToken = (user) => ({
    type:SAVE_TOKEN,
    payload:{
        accessToken:user.access_token
    }
})

export default setUser;