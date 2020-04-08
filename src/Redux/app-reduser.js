
import { getAuth } from './auth-reduser';

const  INITIALIZED_SUCCESS = " INITIALIZED_SUCCESS";



let initialState = {
    initialized:false
}

const appReducer = (state = initialState,action) => {

    switch(action.type){
        
        case   INITIALIZED_SUCCESS:{
            return {...state, 
                initialized:true
               }
        }
       
        default:
                return state;
    }       
}
const  initializedSuccess = () => {
    return { type: INITIALIZED_SUCCESS }
}

export const initializeApp = () => (dispatch) => {
            let promise = dispatch(getAuth());

                Promise.all([promise]).then( () =>{
                    dispatch( initializedSuccess())
                })
            
    }

export default appReducer;