import { authAPI } from '../api/api';
const SET_USER_DATA = "SET-USER-DATA";
const LOGIN = "LOGIN";

let initialState = {
   id: null,
   login: null,
  email: null,
   isAuth: false,
}

const authReducer = (state = initialState,action) => {

    switch(action.type){
        
        case SET_USER_DATA:{
            return {...state, 
                id:action.id,
                login: action.login,
                email:action.email,
                 isAuth: true,}
        }
        case LOGIN:{
            return {...state, 
               
                 isAuth: true,}
        }
        default:
                return state;
    }       
}
 const setAuthUserData = (id, login, email, isAuth=true) =>{
    return { type: SET_USER_DATA, id, login, email,isAuth }
}
 const Login = () =>{
    return { type: LOGIN }
}

export const getAuth = () =>{
            return (dispatch) => {
                authAPI.getAuthUserData().then(response =>{
                      
                if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(id, login, email)) ;
            
                }
            })
        }
    }
export const login = (email, password, rememberMe) =>{
        return (dispatch) => {
            authAPI.login(email, password, rememberMe).then(response =>{
                  if(response.data.resultCode === 0){
                    dispatch(Login())
            }
        })
    }
}
export default authReducer;