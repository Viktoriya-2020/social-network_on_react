import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';


const Dialogs = (props) => {
 
  
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
         
         
      </div>
    );
}

export default Dialogs;