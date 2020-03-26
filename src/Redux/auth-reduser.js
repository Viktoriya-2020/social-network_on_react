const SET_USER_DATA = "SET-USER-DATA";

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
        default:
                return state;
    }       
}
export const setAuthUserData = (id, login, email) =>{
    
    return { type: SET_USER_DATA, id, login, email }
}
export default authReducer;