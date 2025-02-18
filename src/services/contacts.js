import axios from "axios";

const getAll = () => {
  const request = axios.get(`${import.meta.env.VITE_baseUrl}/contacts`);
  const nonExisting = {
    id: 10000,
    firstName: "Jose",
    lastName: "Aldo",
    jobTitle: "King of Rio",
    location: "Brasil",
    priority: true,
  };
  return request.then((response) => response.data.concat(nonExisting));
  // return request.then((response) => response.data);
};

const create = (newObject) => {
  const request = axios.post(
    `${import.meta.env.VITE_baseUrl}/contacts`,
    newObject
  );
  return request.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(
    `${import.meta.env.VITE_baseUrl}/contacts/${id}`,
    newObject
  );
  return request.then((response) => response.data);
};
const remove = (id) => {
  const request = axios.delete(
    `${import.meta.env.VITE_baseUrl}/contacts/${id}`
  );
  return request.then((response) => response.data);
};
export default {
  getAll,
  create,
  update,
  remove,
};
