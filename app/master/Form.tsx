import Input from "@/components/Input";

interface FormProps<T> {
  id?: number;
  name: T;
  addres: T;
  gender: T;
  role: T;
  valueName: T;
  valueAddres: T;
  valueGender: T;
  valueRole: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({
  name,
  addres,
  gender,
  role,
  valueName,
  valueAddres,
  valueGender,
  valueRole,
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
      <Input type="text" name={role} value={valueRole} onChange={onChange} />
    </>
  );
}
