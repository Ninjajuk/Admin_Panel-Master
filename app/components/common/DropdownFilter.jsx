import React from "react";

const DropdownFilter = ({ columns, onFilter }) => {
  return (
    <div className="absolute  bg-white  max-w-lg w-full max-h-48 overflow-y-auto border rounded shadow-lg top-6 left-0  p-2 z-20">
      {columns.map((col, index) => (
        <div
          key={index}
          className="p-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => onFilter(col)}
        >
          {col}
        </div>
      ))}
    </div>
  );
};

export default DropdownFilter;
