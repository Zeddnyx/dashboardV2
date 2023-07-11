import Input from "@/components/Input";
import { Dropdown } from "@/components/DropDown";

interface FormProps<T> {
  id: number;
  name: T;
  addres: T;
  gender: T;
  role: T;
  valueName: T;
  options: {
    value: T;
  }[];
  select: T;
  setSelect: (selected: T) => void;
  valueAddres: T;
  valueGender: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function Form({
  name,
  valueName,
  addres,
  valueAddres,
  gender,
  valueGender,
  options,
  select,
  setSelect,
  onChange,
}: FormProps<string>) {
  return (
    <>
      <Input type="text" name={name} value={valueName} onChange={onChange} />
      <Input
        type="text"
        name={addres}
        value={valueAddres}
        onChange={onChange}
      />
      <Input
        type="text"
        name={gender}
        value={valueGender}
        onChange={onChange}
      />
      <Dropdown select={valueGender} setSelect={setSelect} options={options} />
    </>
  );
}
