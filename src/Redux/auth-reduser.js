import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';
const SET_USER_DATA = "SET-USER-DATA";

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                id: action.id,
                login: action.login,
                email: action.email,
                isAuth: true,
            }
        }

        default:
            return state;
    }
}
const setAuthUserData = (id, login, email, isAuth) => {
    return { type: SET_USER_DATA, id, login, email, isAuth }
}

export const getAuth = () => async (dispatch) => {
    let response = await authAPI.getAuthUserData();
    if (response.data.resultCode === 0) {
        let { id, login, email } = response.data.data;
        dispatch(setAuthUserData(id, login, email, true));
    }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuth())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
        dispatch(stopSubmit("login", { _error: message }))
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}

export default authReducer;