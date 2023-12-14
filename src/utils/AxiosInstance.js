import axios from "axios";
import { baseUrl } from "./Endpoint";
axios.defaults.withCredentials = true

const instance = axios.create({
    baseURL: baseUrl
});

export default instance