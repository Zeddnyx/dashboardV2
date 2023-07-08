interface Props {
  type: string;
  name?: string;
  value?: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type, name, value, label, onChange }: Props) {
  return (
    <div className="flex flex-col mt-2">
      <label htmlFor={name} className="text-sm text-gray-500">{label}</label>
      <input className="bg-transparent outline-none" type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
}
