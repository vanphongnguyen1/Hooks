import React from 'react';

const Pagination = (props) => {
  const { paginations, onChangPage } = props
  const {_page, _limit, _totalRows } = paginations
  const totalPages = Math.ceil(_totalRows / _limit)

  const handleChangePage = page => {
    if (onChangPage) {
      onChangPage(page)
    }
  }

  return (
    <>
      <button
        disabled={ _page <= 1}
        onClick={() => handleChangePage(_page - 1) }
      >
        Prev
      </button>
      <button
        disabled={ _page >= totalPages}
        onClick={() => handleChangePage(_page + 1) }
      >
        Next
      </button>

    </>
  );
}


export default Pagination;