import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:3001/api",
});

export default customFetch;
