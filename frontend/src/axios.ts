import axios, { type AxiosInstance } from "axios";

const baseURL: string = import.meta.env.VITE_BASE_URL;

export const api : AxiosInstance =axios.create({
    baseURL: baseURL
});
