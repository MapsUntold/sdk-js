import { AxiosInstance } from "axios";
declare class HttpClient {
    private client;
    constructor(apiKey: string);
    getClient(): AxiosInstance;
}
export default HttpClient;
