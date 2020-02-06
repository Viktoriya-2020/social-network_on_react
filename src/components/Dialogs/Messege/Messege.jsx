import React from 'react';
import s from './../Dialogs.module.css'




const Messege = (props) =>{
  return(
    <div className={s.massege}>
         {props.messeges}    
    </div>
  );
}



export default Messege;