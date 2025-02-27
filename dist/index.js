"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = exports.MapsUntold = void 0;
const channel_1 = require("./channel");
Object.defineProperty(exports, "Channel", { enumerable: true, get: function () { return channel_1.Channel; } });
const httpClient_1 = __importDefault(require("./httpClient"));
class MapsUntold {
    constructor(config) {
        this.httpClient = new httpClient_1.default(config.apiKey).getClient();
    }
    async getChannel(channelId) {
        try {
            // Haal de volledige channel data op
            const response = await this.httpClient.get(`/channels/${channelId}`);
            // Maak een Channel instantie
            return new channel_1.Channel(response.data, this.httpClient);
        }
        catch (error) {
            console.error("Error fetching channel data:", error);
            throw new Error("Failed to fetch channel data");
        }
    }
    async getParentCategories(categoryId) {
        try {
            const response = await this.httpClient.get(`/categories/${categoryId}/parents`);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching parent categories:", error);
            throw new Error("Failed to fetch parent categories");
        }
    }
    async getLocationAutocomplete(query) {
        try {
            const response = await this.httpClient.get(`/locations/autocomplete`, {
                params: { query }
            });
            return response.data;
        }
        catch (error) {
            console.error("Error fetching location autocomplete:", error);
            throw new Error("Failed to fetch location autocomplete results");
        }
    }
}
exports.MapsUntold = MapsUntold;
