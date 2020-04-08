import React, { useState } from 'react';
import style from './Paginator.module.css';

const Paginator =({totalItemsCount, count, currentPage, onPageChanged, portionSize = 10}) =>{
   
    let pagesCount = Math.ceil(totalItemsCount / count);

    let pages = []
    
    for(let i=1;i<=pagesCount;i++){
        pages.push(i)
    }
let portionCount = Math.ceil(pagesCount / portionSize);
let [portionNumber, setPortionNumber] = useState(1);
let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
let rightPortionPageNumber = portionNumber * portionSize;
    
   return(
        <div className={style.pagesPortion}>
       { portionNumber > 1 && 
        <button className={style.specBut} onClick = { () => {setPortionNumber(portionNumber - 1)}}>PREV</button>}
            {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map((p) =>{ 
                return <button  key = {p.index} className = {currentPage === p && style.selectPage} 
                onClick = {(e)=>{onPageChanged(p)}}>{p}</button>
                }) 
            }
       { portionCount > portionNumber &&
        <button className={style.specBut} onClick = { () => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}    
        </div>
    );   
}   

export default  Paginator;