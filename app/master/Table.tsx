import React, { useState, useEffect } from "react";
import Form from "./Form";
import { httpPut, httpDelete, httpPost, httpGet } from "@/service/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

interface FormProps<T> {
  id: number;
  name: T;
  addres: T;
  gender: T;
  role: {
    value: "admin" | "member";
  };
}

export default function Table() {
  const [data, setData] = useState([]);
  const [id, setId] = useState<number>(0);
  const [value, setValue] = useState({
    id: 0,
    name: "",
    addres: "",
    gender: "",
    role: [
      {
        value: "member",
      },
      {
        value: "admin",
      },
    ],
  });
  const [select, setSelect] = useState<string>(value.role[0].value);

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
    setSelect(e.target.value);
    console.log(select);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate();
    value.id !== id ? httpPut(value.id, value) : httpPost(value);
  };

  return (
    <>
      <div className="flex gap-3 items-start justify-around">
        <form onSubmit={handleSubmit}>
          <Form
            name="name"
            valueName={value.name}
            addres="addres"
            valueAddres={value.addres}
            gender="gender"
            valueGender={value.gender}
            options={value.role}
            select={select}
            setSelect={setSelect}
            onChange={handleChange}
          />
          <button
            disabled={!value.name || !value.addres || !value.gender}
            className="btn bg-dark0 w-full mt-2"
          >
            {value.id !== id ? "Update" : "Add"}
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
                  <td>{item.role.value}</td>
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
