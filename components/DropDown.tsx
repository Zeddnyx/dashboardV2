import React from "react";

interface DropdownProps {
  name: string;
  options: {
    value: string;
  }[];
  select: string;
  setSelect: (selected: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  name,
  options,
  select,
  setSelect,
}) => {
  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelect(selectedValue);
  };

  return (
  <div className="grid mt-1">
    <label htmlFor={name} className="text-sm text-gray-500">{name}</label>
    <select value={select} onChange={handleOptionSelect}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  </div>
  );
};
