import React from "react";
import "../../../../components/form/style.css";

const InputDashboard = ({
  type = "text",
  name,
  id,
  placeholder = "",
  htmlFor,
  label,
  onChange,
}) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };
  return (
    <div className="form-group">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className="border focus:outline-none focus:ring-[#800000] focus:border-[#800000] rounded-md p-2 w-full"
      />
      <label htmlFor={htmlFor} className="block text-sm font-medium mb-1">
        {label}
      </label>
    </div>
  );
};

export default InputDashboard;
