import React from 'react';
import style from './Paginator.module.css';

const Paginator =({totalUsersCount, count, currentPage, onPageChanged}) =>{
   
    let pagesCount = Math.ceil(totalUsersCount / count);

    let pages = []
    
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
   return(
        <>
            {pages.map(p =>{ 
                return <button  key = {p.index} className = {currentPage === p && style.selectPage} 
                onClick = {(e)=>{onPageChanged(p)}}>{p}</button>
                }) 
            }
        </>
    );   
}   

export default  Paginator;