import axios, { AxiosInstance } from "axios";

class HttpClient {
    private client: AxiosInstance;

    constructor(apiKey: string) {
        this.client = axios.create({
            baseURL: "https://api.mapsuntold.com", // Pas aan naar de juiste API URL
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            }
        });
    }

    getClient(): AxiosInstance {
        return this.client;
    }
}

export default HttpClient;
