import React, { useState, useEffect } from "react";
import Form from "./Form";
import { httpPut, httpDelete, httpPost, httpGet } from "@/service/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface FormProps<T> {
  id: number;
  name: T;
  addres: T;
  gender: T;
  role: T;
}

export default function Table() {
  const [data, setData] = useState<FormProps<string>[]>([]);
  const [id, setId] = useState<number>(0);
  const [value, setValue] = useState({
    id: 0,
    name: "",
    addres: "",
    gender: "",
    role: "member",
  });

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: httpGet,
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
      httpGet().then((res) => {
        setData(res);
      });
    },
  });

  useEffect(() => {
    mutate();
  }, []);

  const handleEdit = (item: FormProps<string>, id: number) => {
    setValue(item);
    setId(id);
  };

  const handleDelete = (item: FormProps<string>) => {
    httpDelete(item.id);
    mutate();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    if (value.id !== id) {
      httpPut(value.id, { ...value });
      setValue({ ...value, id: 0 });
    } else {
      httpPost({ ...value });
    }
  };

  return (
    <>
      <div className="flex gap-3 items-start justify-between">
        <form onSubmit={handleSubmit}>
          <Form
            name="name"
            valueName={value.name}
            addres="addres"
            valueAddres={value.addres}
            gender="gender"
            valueGender={value.gender}
            role="role"
            valueRole={value.role}
            onChange={handleChange}
          />
          <button
            disabled={
              !value.name || !value.addres || !value.gender || !value.role
            }
            className="btn bg-dark0 w-full mt-2"
          >
            {value.id !== id ? "Update" : "Submit"}
          </button>
        </form>

        <table>
          <thead>
            <tr className="tr-judul">
              <th>#</th>
              <th>Name</th>
              <th>Addres</th>
              <th>Gender</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {data &&
              data.map((item, id) => (
                <tr key={id} className="hover:bg-dark0">
                  <td>{id + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.addres}</td>
                  <td>{item.gender}</td>
                  <td>{item.role}</td>
                  <td className="flex gap-2 items-center">
                    <button
                      className="edit-btn"
                      onClick={() => handleEdit(item, id)}
                    >
                      Edit
                    </button>
                    <button
                      className="rmv-btn"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
