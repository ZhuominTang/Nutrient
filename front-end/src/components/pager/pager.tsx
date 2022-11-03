import React, { useState, useEffect } from "react";
import { usePaginationRange, DOTS } from "../../hooks/usePaginationRange";
import { useDispatch,useSelector } from 'react-redux';
import { RootState } from '../../store';
import { nextPage,previousPage,setPage } from "../../api/pageSlice";
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
    console.log("currentPageNo----------"+page.pageNo)
    console.log("currentPage----------"+currentPage)
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
              className={` prev ${currentPage === 1 ? "disabled" : ""}`}
            >
              previous
            </button>
            {/* show paginated button group */}
            {paginationRange?.map((item, index) => {
              if (item === DOTS) {
                return (
                  <button key={index} className={`paginationItem`}>
                    &#8230;
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
              className={`next ${currentPage === totalPageCount ? "disabled" : ""}`}
            >
              next
            </button>
          </div>
        </div>
      );
}
export default Pager