import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-project-933a5.firebaseio.com/",
});

export default instance;
