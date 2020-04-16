import React from "react";
import { Link } from "react-router-dom";

import "./pagination.css";

const Pagination = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
  modelName,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const link = `/${modelName}/page/`;
  const prev = currentPage === 1 ? currentPage : currentPage - 1;
  const next = currentPage === totalPages ? currentPage : currentPage + 1;

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div aria-label="pagination">
      <ul className="pagination">
        <li>
          <Link
            to={link + prev}
            className="page-link-custom"
            onClick={() => paginate(prev)}
          >
            &lt;&nbsp;
          </Link>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item-custom">
            |
            <Link
              to={link + number}
              className={
                number === currentPage
                  ? "page-link-custom active"
                  : "page-link-custom"
              }
              onClick={() => paginate(number)}
            >
              &nbsp;{number}&nbsp;
            </Link>
          </li>
        ))}
        <li>
          |
          <Link
            to={link + next}
            className="page-link-custom"
            onClick={() => paginate(next)}
          >
            &nbsp;&gt;
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
