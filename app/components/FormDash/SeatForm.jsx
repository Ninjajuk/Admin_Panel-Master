import React, { useState } from "react";

const SeatForm = ({ addRow }) => {
  const [row, setRow] = useState([{ status: "", id: "", price: "" }]);

  const handleInputChange = (index, field, value) => {
    const newRow = [...row];
    newRow[index][field] = value;
    setRow(newRow);
  };

  const addSeat = () => {
    setRow([...row, { status: 0, id: "", price: 0 }]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(row);
    setRow([{ status: 0, id: "", price: 0 }]); // Reset form after submission
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {row.map((seat, index) => (
        <div key={index} className="flex space-x-2">
          <input
            type="number"
            value={seat.status}
            onChange={(e) =>
              handleInputChange(index, "status", Number(e.target.value))
            }
            placeholder="Status"
            className="border p-2 rounded"
          />
          <input
            type="text"
            value={seat.id}
            onChange={(e) => handleInputChange(index, "id", e.target.value)}
            placeholder="Seat ID"
            className="border p-2 rounded"
          />
          <input
            type="number"
            value={seat.price}
            onChange={(e) =>
              handleInputChange(index, "price", Number(e.target.value))
            }
            placeholder="Price"
            className="border p-2 rounded"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={addSeat}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Add Seat
      </button>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
      >
        Add Row
      </button>
    </form>
  );
};

export default SeatForm;
