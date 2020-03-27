import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import { Redirect } from 'react-router-dom';



const Dialogs = (props) => {
   let newMessageElement = React.createRef();

      let addMessage = () => {
        props.addMessage();
      }

     let newMessageBody = () => {
      let body = newMessageElement.current.value;
      props.newMessageBodyCreator(body)
     }
  
   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messegesElements = props.dialogsPage.messeges.map(m => <Messege messeges={m.messeges} id={m.id}/>);

      if(!props.isAuth) return <Redirect to = '/login'/>
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
    <textarea ref = {newMessageElement} cols='50' rows='5' value={props.dialogsPage.newMessageBody} onChange = {newMessageBody}></textarea>
            <button onClick = {addMessage}>Add</button>
            </div>
         
      </div>
      
    );
}

export default Dialogs;