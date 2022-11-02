import React, { useState, useEffect } from "react";
import { usePaginationRange, DOTS } from "../../hooks/usePaginationRange";
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

    const [currentPage, setCurrentPage] = useState(1);

    const paginationRange = usePaginationRange({
        totalPageCount,
        contentPerPage,
        buttonConst,
        siblingCount,
        currentPage,
      });

      function goToNextPage() {
        setCurrentPage((page) => page + 1);
        getMessage(currentPage)
      }
      function gotToPreviousPage() {
        setCurrentPage((page) => page - 1);
        getMessage(currentPage)
      }
      function changePage(event:React.MouseEvent<HTMLButtonElement>) {
        const pageNumber = Number(event.currentTarget.innerText);
        setCurrentPage(pageNumber);
        getMessage(currentPage)
      }

    
      return (
        <div>

          {/* show the pagiantion
                    it consists of next and previous buttons
                    along with page numbers, in our case, 5 page
                    numbers at a time */}
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