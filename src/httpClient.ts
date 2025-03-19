import axios, { AxiosInstance } from "../node_modules/axios/index.js";


class HttpClient {
    private client: AxiosInstance;

    constructor(apiKey: string) {
        this.client = axios.create({
            baseURL: "https://api.mapsuntold.io/v2", // Pas aan naar de juiste API URL
            headers: {
                "Authorization": `token ${apiKey}`,
                "Content-Type": "application/json"
            }
        });
    }

    getClient(): AxiosInstance {
        return this.client;
    }
}

export default HttpClient;
