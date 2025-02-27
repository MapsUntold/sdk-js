"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class HttpClient {
    constructor(apiKey) {
        this.client = axios_1.default.create({
            baseURL: "https://api.mapsuntold.com", // Pas aan naar de juiste API URL
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            }
        });
    }
    getClient() {
        return this.client;
    }
}
exports.default = HttpClient;
