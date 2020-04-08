import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reduser";
import appReducer from "./app-reduser";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
window.store = store;