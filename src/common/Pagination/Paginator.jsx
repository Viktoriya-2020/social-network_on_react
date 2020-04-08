import React from 'react';
import style from './Paginator.module.css';

const Paginator =(props) =>{
   
    let pagesCount = Math.ceil(props.totalUsersCount/ props.count);

    let pages = []
    
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
   return(
        <div className = {style.numbersPages}>
            {pages.map(p =>{ 
                return <button  key = {p.index} className = {props.currentPage === p && style.selectPage} 
                onClick = {(e)=>{props.onPageChanged(p)}}>{p}</button>
                }) 
            }
        </div>
    );   
}   

export default  Paginator;