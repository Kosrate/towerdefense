import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000/api";

const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

export const fetchTowers = async () => {
    const response = await api.get("/towers/");
    return response.data;
};

export const fetchEnemies = async () => {
    const response = await api.get("/enemies/");
    return response.data;
};

export const fetchLevels = async () => {
    const response = await api.get("/levels/");
    return response.data;
};