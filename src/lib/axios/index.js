import axios from "axios";

const instance = axios.create({
  baseURL: "https://api",
});

export default instance;
