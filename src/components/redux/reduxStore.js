import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import setUserProfile from "./authReducer";
import thunkMiddlware from 'redux-thunk';
import {reducer as formReduser} from 'redux-form';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: setUserProfile,
    form: formReduser
});

let store = createStore(reducers, applyMiddleware(thunkMiddlware));

window.store = store;

export default store;