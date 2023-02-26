import React, { useState,useContext } from "react";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { AppContext } from "../../App";

function Items({ currentItems, Component, Container }) {
  return (
    <div className='d-flex flex-wrap justify-content-center w-100 p-5 gap-4'>
      {currentItems && currentItems.map((item, key) => 
        <Component key={key} data={item} />)}
    </div>
  );
}

function Pagination({ data, itemsPerPage, Component}) {
  const {dark} = useContext(AppContext);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;

  const currentItems = data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  return (
    <div style={{backgroundColor:`${dark?'#232322':''}`}}>
      <Items
        currentItems={currentItems}
        Component={Component}
      />
      <StyledPaginationContainer>
        <ReactPaginate
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </StyledPaginationContainer>
    </div>
  );
}

export default Pagination;

const StyledPaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
