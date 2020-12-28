import axios from "axios";

const instance = axios.create({
  baseURL: "http://fas5532ad422.ngrok.io",
});

export default instance;
