// src/components/CustomInput.js
import React from 'react';

const CustomInput = ({ label, placeholder, name, type, onChange, required, value }) => {
  return (
    <div className="flex flex-col justify-center mb-4 w-full sm:w-80">
      <label className="font-bold text-base mb-2">{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="border rounded px-3 py-2 w-full"
        required={required}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

export default CustomInput;
