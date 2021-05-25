import axios from "axios"
import { loginError, loginRequest, loginSuccess, registerError, registerRequest, registerSuccess } from "./authActions";
const API_KEY = "AIzaSyAzlNZEwhhrTyuz9kfceGBhuxPKQFPkxRw"


export const registerOperations = (user) => async dispatch => {
    dispatch(registerRequest())
    try {
        const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, { ...user, returnSecureToken: true })
        dispatch(registerSuccess(data))
        console.log(data);
    } catch (error) {
       dispatch(registerError(error.response.data.error.message))
    }
};

export const loginOperations = (user) => async dispatch => {
    dispatch(loginRequest())
   try {
       const { data } = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, { ...user, returnSecureToken: true })
       dispatch(loginSuccess(data))
   } catch (error) {
        dispatch(loginError(error.response.data.error.message))
   } 
}
