import { AxiosInstance } from "axios";
import { ChannelStyle, ID, Location, Pagination, RawChannel, Recommendation } from "./types";
declare class Channel {
    id: ID;
    name: string;
    slug: string;
    style: ChannelStyle;
    location: Location;
    included_cities: Array<ID>;
    private httpClient;
    constructor(data: RawChannel, httpClient: AxiosInstance);
    getRecommendations(): Promise<Pagination<Recommendation>>;
}
export { Channel };
