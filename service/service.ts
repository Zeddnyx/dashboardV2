const api = "http://localhost:3000";
// const api = process.env.NEXT_API;

export const httpGet = async (): Promise<any> => {
  const req = await fetch(api + "/data")
  const res = await req.json();
  return res;
};

export const httpPost = async (data:any): Promise<any> => {
  const req = await fetch(api + "/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  return await req.json()
};


export const httpPut = async (id: number, data: any): Promise<any> => {
  const req = await fetch(api + "/data/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  })
  const res = await req.json();
  return res;
};

export const httpDelete = async (id: number): Promise<any> => {
  const req = await fetch(api + "/data/" + id, {
    method: "DELETE",
  });
  const res = await req.json();
  return res;
};
