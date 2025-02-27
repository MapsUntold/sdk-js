"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
class Channel {
    constructor(data, httpClient) {
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
        this.style = data.style;
        this.location = data.default_location;
        this.included_cities = data.included_cities;
        this.httpClient = httpClient;
    }
    async getRecommendations() {
        //todo 
        try {
            const response = await this.httpClient.get(`/channels/${this.id}/recommendations`);
            return response.data;
        }
        catch (error) {
            console.error("Error fetching recommendations:", error);
            throw new Error("Failed to fetch recommendations");
        }
    }
}
exports.Channel = Channel;
