import React from 'react';
import { addMessageActionCreator, writeMessageActionCreator } from '../../Redax/dialogs-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
   let state = props.store.getState();

      let addMessage = () => {
        
         props.dispatch( addMessageActionCreator());
         
      }

     let newMessageBodyCreator = (body) => {
      props.dispatch( writeMessageActionCreator(body));
     }
  
   
    return(
      <Dialogs dialogsPage = {state.dialogsPage} newMessageBodyCreator = {newMessageBodyCreator}
      addMessage = {addMessage}/>
    );
}

export default DialogsContainer;