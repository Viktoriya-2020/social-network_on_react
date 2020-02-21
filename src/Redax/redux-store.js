import { createStore, combineReducers } from "redux"
import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sideBarReducer,
})

let store = createStore(reducers);

export default store;