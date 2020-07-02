import { SIGN_UP,LOGIN } from "./types";

// action creators

export const SignUpAction=(data)=>{
    return dispatch=>dispatch({
        type: SIGN_UP,
        payload: data
    })
}


export const LoginAction = (data) => {
    return dispatch => dispatch({
        type: LOGIN,
        payload: data
    })
}