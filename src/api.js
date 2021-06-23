import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "4f6578794983bcd8f310a8b773d93195",
        language: "en-US",
    }
});

api.get("tv/popular");

export default api;