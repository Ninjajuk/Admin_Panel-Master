import React, { useState } from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

const MyTable = ({
  headerCol,
  row,
  action = true,
  showEdit = true,
  showDelete = true,
  handleDelete,
}) => {
  const [sortedData, setSortedData] = useState(row);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  const onSort = (col) => {
    let direction = "asc";
    if (sortConfig.key === col && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedArray = [...sortedData].sort((a, b) => {
      if (a[col] < b[col]) return direction === "asc" ? -1 : 1;
      if (a[col] > b[col]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sortedArray);
    setSortConfig({ key: col, direction });
  };

  const getSortIndicator = (col) => {
    if (sortConfig.key === col) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return "";
  };

  return (
    <div className="overflow-x-auto max-h-full w-full">
      <table className="w-full border-collapse">
        <thead className="sticky top-0  bg-primary ">
          <tr className="text-left  font-serif px-2 text-white ">
            {headerCol.map((item, index) => (
              <th
                key={index}
                className="px-2 py-2 cursor-pointer"
                onClick={() => onSort(item)}
              >
                {item}
                <span className="pl-1 text-green-600 hover:text-green-600">
                  {getSortIndicator(item)}
                </span>
              </th>
            ))}
            {action && (
              <th className="pl-1 px-2 py-2 cursor-pointer">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="divide-y-2 border-b-2 divide-gray-200 hover:bg-gray-200 cursor-pointer "
            >
              {headerCol.map((col, colIndex) => (
                <td key={colIndex} className="py-2 px-2 text-nowrap">
                  {typeof row[col] === "string" &&
                  row[col].startsWith("http") ? (
                    <img src={row[col]} alt="Product" className="max-h-16" />
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
              {/* {action && (
                <td className="py-2 px-2 text-nowrap ">
                  <span className="actions flex grid-cols-2 gap-4 ">
                    {showEdit && (
                      <BsFillPencilFill
                        title="Edit"
                        className="edit-btn cursor-pointer text-green-500 hover:text-green-800 "
                        onClick={() => editRow(rowIndex)}
                      />
                    )}
                    {showDelete && (
                      <FaTrash
                        title="Delete"
                        className="delete-btn cursor-pointer text-red-500 hover:text-red-800"
                        onClick={() => handleDelete(rowIndex)} 
                      />
                    )} */}
                  </span>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;