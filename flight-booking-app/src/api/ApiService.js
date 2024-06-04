import axios from "axios";

export const BASE_API_URL = "http://localhost:4005";

export const middleWareWithPOST = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});
