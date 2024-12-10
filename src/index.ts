import { Channel } from "./channel";
import { Config, Style } from "./config";
import { AutocompleteResult, Location, ID, Pagination, ParentCategory, Recommendation } from "./types";

class MapsUntold {
    constructor(config: Config) {
        // TODO
    }

    public async getChannel(channelSlug: string): Promise<Channel> {
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
    Style,
    Pagination,
    Location,
    Channel,
    Recommendation,
    ParentCategory,
    AutocompleteResult
}