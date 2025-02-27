import { AxiosInstance } from "axios";
import { ChannelStyle, ExampleLocation, ID, Location, Pagination, ParentCategory, RawChannel, Recommendation, TopLocation } from "./types";

class Channel {
    public id: ID;
    public name: string;
    public slug: string;
    public style: ChannelStyle;
    public location: Location;
    public included_cities: Array<ID>;
    private httpClient: AxiosInstance;

    constructor(data: RawChannel, httpClient: AxiosInstance) {
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
        this.style = data.style;
        this.location = data.default_location;
        this.included_cities = data.included_cities;
        this.httpClient = httpClient;
    }

    public async getRecommendations(): Promise<Pagination<Recommendation>> {
        //todo 
        try {
            const response = await this.httpClient.get<Pagination<Recommendation>>(`/channels/${this.id}/recommendations`);
            return response.data;
        } catch (error) {
            console.error("Error fetching recommendations:", error);
            throw new Error("Failed to fetch recommendations");
        }
    }
}

export {
    Channel
}

