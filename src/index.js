import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from './Redax/redux-store';
import Provider from 'react-redux';

let rerenderEntireTree = (state) =>{
    
       
        ReactDOM.render(
            <BrowserRouter>
                <Provider store = {store}>
                <App store={store} 
                dispatch = {store.dispatch.bind(store)}
                 />
                 </Provider>
            </BrowserRouter>,
            document.getElementById('root'));
        
}

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want your app towork offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
