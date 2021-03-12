import React, {useState} from 'react';
import classes from './Paginator.module.css';


const Paginator = ({totalItemsCount, pageSize, onPageChanged, currentPage, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return <div className={classes.paginator}>
        {portionNumber > 1 &&
        <button className={classes.btnToggle} onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>&lt;&lt;</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={`${currentPage === p && classes.selectedPage} ${classes.pages}`} key={p.id}
                             onClick={(e) => {
                                 onPageChanged(p);
                             }}> {p}</span>
            })}

        {portionCount > portionNumber &&
        <button className={classes.btnToggle} onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>&gt;&gt;</button>}

    </div>
}

export default Paginator;