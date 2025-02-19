import { Channel } from "./channel";
import { Config } from "./config";
import { AutocompleteResult, Location, ID, Pagination, ParentCategory, Recommendation } from "./types";

 export interface MapsUntoldConfig {
    apiKey: string;
}
 class MapsUntold {
    private apiKey: string;
    constructor(config: MapsUntoldConfig) {
        this.apiKey = config.apiKey;
        // TODO
    }

    public async getChannel(channelId: string): Promise<Channel> {
        return new Channel(channelId, this.apiKey)
        // TODO
    }

    public async getParentCategories(categoryId: ID): Promise<Array<ParentCategory>> {
        // TODO
    }

    public async getLocationAutocomplete(query: string): Promise<Pagination<AutocompleteResult>> {
        // TODO
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