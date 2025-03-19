import { Channel } from "./channel.js";
import { Config } from "./config.js";
import HttpClient from "./httpClient.js";
import { AxiosInstance } from "../node_modules/axios/index.js"
import { AutocompleteResult, Location, ID, Pagination, RawChannel, ParentCategory, Recommendation } from "./types.js";


 export interface MapsUntoldConfig {
    apiKey: string;
  }
  class MapsUntold {
    private httpClient: AxiosInstance;
    constructor(config: MapsUntoldConfig) {
        this.httpClient = new HttpClient(config.apiKey).getClient();
    }
    public async getChannel(channelId: string): Promise<Channel> {
        console.log("het werkt")
        try {
            // Haal de volledige channel data op
            const response = await this.httpClient.get<RawChannel>(`/channels/${channelId}`);
            
            return new Channel(response.data, this.httpClient);
        } catch (error) {
            console.error("Error fetching channel data:", error);
            throw new Error("Failed to fetch channel data");
        }
    }
    
    public async getRecommendations(channelId: string, parent_category_id: number, input_location_id: number): Promise<Pagination<Recommendation>> {
        try {
            // Haal aanbevelingen op voor een specifieke categorie
            const response = await this.httpClient.get<Pagination<Recommendation>>(`/recommendations/${channelId}/${parent_category_id}/${input_location_id}/`);
            return response.data;  // We nemen aan dat response.data een object is van type Pagination<Recommendation>
        } catch (error) {
            console.error("Error fetching recommendations:", error);
            throw new Error("Failed to fetch recommendations");
        }
    }
       public async getParentCategories(channelId: string): Promise<Array<ParentCategory>> {
        try {
            const response = await this.httpClient.get<Array<ParentCategory>>(`/parent-categories/${channelId}/`);
            return response.data;
        } catch (error) {
            console.error("Error fetching parent categories:", error);
            throw new Error("Failed to fetch parent categories");
        }
    }

    public async getLocationAutocomplete(query: string): Promise<Pagination<AutocompleteResult>> {
        try {
            const response = await this.httpClient.get<Pagination<AutocompleteResult>>('/locations/autocomplete/', {
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