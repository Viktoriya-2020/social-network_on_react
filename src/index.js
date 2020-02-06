import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import state from './Redax/State';
import {addNewPost, addNewMessage, subscribe, upDatePostText} from './Redax/State';

let rerenderEntireTree = (state) =>{
    
       
        ReactDOM.render(
            <BrowserRouter>
            
                <App state={state} addPost={addNewPost} addMessage={addNewMessage} upDatePostText={upDatePostText} />
            </BrowserRouter>,
            document.getElementById('root'));
        
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
// If you want your app towork offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
