import React, { useState, useEffect } from "react";
import { usePaginationRange, DOTS } from "../../hooks/usePaginationRange";
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../store';
import { nextPage,previousPage,setPage } from "../../api/pageSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import "./pager.scss"
interface Prop {

    buttonConst: number,
    contentPerPage: number,
    siblingCount: number,
    totalPageCount:number
    getMessage: Function
}


const Pager = (
    {

        buttonConst,
        contentPerPage,
        siblingCount,
        totalPageCount,
        getMessage
    }: Prop
) => {
    
    const page = useSelector((state: RootState) => state.page)
    const [currentPage, setCurrentPage] = useState(page.pageNo);
    const dispatch = useDispatch()
    useEffect(()=>{
      setCurrentPage(page.pageNo)
    },[page.pageNo])
    const paginationRange = usePaginationRange({
        totalPageCount,
        contentPerPage,
        buttonConst,
        siblingCount,
        currentPage,
      });
   
      function goToNextPage() {
        dispatch(nextPage({}))        
        getMessage(currentPage+1)
      }
      function gotToPreviousPage() {
        dispatch(previousPage({}))
        getMessage(currentPage-1)
      }
      function changePage(event:React.MouseEvent<HTMLButtonElement>) {
        const pageNumber = Number(event.currentTarget.innerText);
        dispatch(setPage({page:pageNumber}))
        getMessage(pageNumber)
      }

    
      return (
        <div>

          <div className="pagination">
            {/* previous button */}
            <button
              onClick={gotToPreviousPage}
              className={` prev icon ${currentPage === 1 ? "disabled" : ""}`}
            >
              <FontAwesomeIcon icon={faArrowLeft} className="icon" />
            </button>
            {/* show paginated button group */}
            {paginationRange?.map((item, index) => {
              if (item === DOTS) {
                return (
                  <button key={index} className={`paginationItem`}>
                    <span>&#8230;</span>
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  onClick={changePage}
                  className={`paginationItem ${
                    currentPage === item ? "active" : null
                  }`}
                >
                <span>{item}</span> 
                </button>
              );
            })}
            {/* next button */}
            <button
              onClick={goToNextPage}
              className={`next icon ${currentPage === totalPageCount ? "disabled" : ""}`}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
      );
}
export default Pager