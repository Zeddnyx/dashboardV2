// type DropdownProps<T> = {
//   name: T;
//   options: {
//     value: T;
//   }[];
//   value: T;
//   onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
// };
//
// export default function Dropdown({
//   name,
//   options,
//   value,
//   onChange,
// }: DropdownProps<string>) {
//
//
//   return (
//     <div>
//       <label htmlFor={name}>{name}</label>
//       <select name={name} value={value} onChange={onChange}>
//         {options.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.value}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// }
import React from "react";

interface DropdownProps {
  options: {
    value: string;
  }[];
  select: string;
  setSelect: (selected: string) => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  select,
  setSelect,
}) => {
  const handleOptionSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setSelect(selectedValue);
  };

  return (
    <select value={select} onChange={handleOptionSelect}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};
