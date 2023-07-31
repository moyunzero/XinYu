import axios from "axios";

window.axios = axios
axios.defaults.withCredentials = false
axios.defaults.baseURL = "http://localhost:3000/api"
