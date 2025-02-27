import { Channel } from "./channel";
import { Config } from "./config";
import { AutocompleteResult, Location, ID, Pagination, ParentCategory, Recommendation } from "./types";
export interface MapsUntoldConfig {
    apiKey: string;
}
declare class MapsUntold {
    private httpClient;
    constructor(config: MapsUntoldConfig);
    getChannel(channelId: string): Promise<Channel>;
    getParentCategories(categoryId: ID): Promise<Array<ParentCategory>>;
    getLocationAutocomplete(query: string): Promise<Pagination<AutocompleteResult>>;
}
export { MapsUntold, Config, Pagination, Location, Channel, Recommendation, ParentCategory, AutocompleteResult };
