import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_RACT_APP_BASE_URL_API_GITHUB
})