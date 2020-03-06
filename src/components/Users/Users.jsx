import React from 'react';
import style from './Users.module.css';



const Users = (props) => {
  
  // let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  // let messegesElements = props.dialogsPage.messeges.map(m => <Messege messeges={m.messeges} id={m.id}/>);

    return(
        <div className = {style.users}>
            <div className = {style.user}>
                <div className = {style.user_grid}>
                    <div><img src="https://cdn1.iconfinder.com/data/icons/children-avatar-flat/128/children_avatar-01-512.png" alt="user_picture"/></div>
                    <div> 
                        <p>Fullname</p>
                        <p> Country (City)</p>
                    </div>
                    <div></div>
                    <div><button>Follow</button></div>
                </div>
            </div>
            <div className = {style.user}>Name</div>
            <div className = {style.user}>Name</div>
            <div className = {style.user}>Name</div>
        </div>
    );
    }

export default Users;