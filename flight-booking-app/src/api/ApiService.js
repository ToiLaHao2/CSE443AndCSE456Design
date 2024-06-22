import axios from "axios";

export const BASE_API_URL = "https://localhost:7240";

export const middleWareWithPOST = axios.create({
    baseURL: BASE_API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});
