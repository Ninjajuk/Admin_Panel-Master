import React, { useState } from "react";
import PropTypes from "prop-types";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const PaginationComponent = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
  showTotal = true,
}) => {
  const [current, setCurrent] = useState(currentPage);
  const [pageSize, setPageSize] = useState(itemsPerPage);

  const totalPages = Math.ceil(totalItems / pageSize);

  const handlePageChange = (page) => {
    setCurrent(page);
    onPageChange(page, pageSize);
  };

  const handleItemsPerPageChange = (value) => {
    setPageSize(value);
    onItemsPerPageChange(value);
    const newTotalPages = Math.ceil(totalItems / value);
    if (current > newTotalPages) {
      setCurrent(newTotalPages);
      onPageChange(newTotalPages, value);
    }
  };

  const PrevNextArrow = (type) => {
    if (type === "prev") {
      return (
        <button
          onClick={() => handlePageChange(current - 1)}
          disabled={current === 1}
          className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
      );
    }
    if (type === "next") {
      return (
        <button
          onClick={() => handlePageChange(current + 1)}
          disabled={current === totalPages}
          className="p-2 rounded-full hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full flex items-center justify-between p-4 bg-white shadow-lg rounded-lg">
      {showTotal && (
        <div className="text-sm text-gray-600">
          {`Showing ${(current - 1) * pageSize + 1}-${Math.min(
            current * pageSize,
            totalItems
          )} of ${totalItems}`}
        </div>
      )}
      <div className="flex items-center space-x-2">
        {PrevNextArrow("prev")}
        <span className="text-sm text-gray-600">
          {`Page ${current} of ${totalPages}`}
        </span>
        {PrevNextArrow("next")}
      </div>
    </div>
  );
};

PaginationComponent.propTypes = {
  totalItems: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onItemsPerPageChange: PropTypes.func.isRequired,
  showTotal: PropTypes.bool,
};

export default PaginationComponent;
