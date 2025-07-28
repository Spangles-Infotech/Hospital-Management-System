import React from 'react';

export const Checkbox = ({ id, checked, onChange }) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={() => onChange(id)}
      className="form-checkbox h-5 w-5 text-blue-600"
    />
  );
};