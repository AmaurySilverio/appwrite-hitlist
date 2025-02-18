import axios from "axios";

const getAll = () => {
  const request = axios.get(`${import.meta.env.VITE_baseUrl}/companies`);
  const nonExisting = {
    id: 10000,
    name: "This note is not saved to server",
    location: "oz",
    priority: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
  // return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(
    `${import.meta.env.VITE_baseUrl}/companies`,
    newObject
  );
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(
    `${import.meta.env.VITE_baseUrl}/companies/${id}`,
    newObject
  );
  return request.then((response) => response.data);
};
const remove = (id) => {
  const request = axios.delete(
    `${import.meta.env.VITE_baseUrl}/companies/${id}`
  );
  return request.then((response) => response.data);
};
export default {
  getAll,
  create,
  update,
  remove,
};
