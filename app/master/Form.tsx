import Input from "@/components/Input";

interface FormProps<T> {
  id: number;
  name: T;
  addres: T;
  country: T;
  gender: T;
  role: T;
  valueName: T;
  valueAddres: T;
  valueCountry: T;
  valueGender: T;
  valueRole: "admin | member";
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Form({name,valueName, addres, valueAddres, country, valueCountry, gender, valueGender, role, valueRole, onChange}: FormProps<string>) {
  return (
    <>
      <Input label={name}    name={name}    value={valueName} onChange={onChange} />
      <Input label={addres}  name={addres}  value={valueAddres} onChange={onChange} />
      <Input label={country} name={country} value={valueCountry} onChange={onChange} />
      <Input label={gender}  name={gender}  value={valueGender} onChange={onChange} />
      <Input label={role}    name={role}    value={valueRole} onChange={onChange} />
    </>
  )
}
