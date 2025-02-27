import { Channel } from "./channel";
import { Config } from "./config";
import HttpClient from "./httpClient";
import { AxiosInstance } from "axios"
import { AutocompleteResult, Location, ID, Pagination, RawChannel, ParentCategory, Recommendation } from "./types";

 export interface MapsUntoldConfig {
    apiKey: string;
}
 class MapsUntold {
    private httpClient: AxiosInstance;
    constructor(config: MapsUntoldConfig) {
        this.httpClient = new HttpClient(config.apiKey).getClient();
    }

    public async getChannel(channelId: string): Promise<Channel> {
        try {
            // Haal de volledige channel data op
            const response = await this.httpClient.get<RawChannel>(`/channels/${channelId}`);
            
            // Maak een Channel instantie
            return new Channel(response.data, this.httpClient);
        } catch (error) {
            console.error("Error fetching channel data:", error);
            throw new Error("Failed to fetch channel data");
        }
    }

    public async getParentCategories(categoryId: ID): Promise<Array<ParentCategory>> {
        try {
            const response = await this.httpClient.get<Array<ParentCategory>>(`/categories/${categoryId}/parents`);
            return response.data;
        } catch (error) {
            console.error("Error fetching parent categories:", error);
            throw new Error("Failed to fetch parent categories");
        }
    }

    public async getLocationAutocomplete(query: string): Promise<Pagination<AutocompleteResult>> {
        try {
            const response = await this.httpClient.get<Pagination<AutocompleteResult>>(`/locations/autocomplete`, {
                params: { query }
            });
            return response.data;
        } catch (error) {
            console.error("Error fetching location autocomplete:", error);
            throw new Error("Failed to fetch location autocomplete results");
        }
    }
 }
export {
    MapsUntold,
    Config,
    Pagination,
    Location,
    Channel,
    Recommendation,
    ParentCategory,
    AutocompleteResult
}