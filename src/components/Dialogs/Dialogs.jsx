import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormsControls';
import { maxLengthCreator, required } from '../../utils/validators/validator';



const Dialogs = (props) => {
   

      let addMessage = (values) => {
        props.addMessage(values.messageBody);
      }

    
   let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messegesElements = props.dialogsPage.messeges.map(m => <Messege messeges={m.messeges} id={m.id}/>);

    
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
         <DialogsMessageReduxForm onSubmit={addMessage} />
            </div>
         
      </div>
      
    );
}
const maxLength40 = maxLengthCreator(40);
const DialogsMessageForm = (props) => {
  return(
    <form onSubmit={props.handleSubmit}>
        <div><Field component={Textarea} validate={[required, maxLength40]} name='messageBody' placeholder='write message...' /></div>
        <div><button>Add</button></div>
    </form>
  )
}
const DialogsMessageReduxForm = reduxForm({form:'newMessage'})(DialogsMessageForm)

export default Dialogs;