import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import { addMessageActionCreator } from '../../Redax/dialogs-reducer';


const Dialogs = (props) => {
   let newMessageElement = React.createRef();

      let addMessage = () => {
         let text = newMessageElement.current.value;
         props.dispatch( addMessageActionCreator(text));
         newMessageElement.current.value = ''
      }
  
   let dialogsElements = props.dialogs.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messegesElements = props.dialogs.messeges.map(m => <Messege messeges={m.messeges} id={m.id}/>);

    return(
      <div  className={s.gialogs}> 
         <div className={s.dialogs_names}>
            {dialogsElements}
          </div>
         <div className={s.masseges}>
            {messegesElements}
           
         </div>
         <div ></div>
         <div className={s.addtext}>
            <textarea ref = {newMessageElement} cols='50' rows='5' ></textarea>
            <button onClick = {addMessage}>Add</button>
            </div>
         
      </div>
      
    );
}

export default Dialogs;