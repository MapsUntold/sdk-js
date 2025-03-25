import axios, { AxiosInstance } from "axios";
import { AutocompleteResult, Location, ID, Pagination, RawChannel, ParentCategory, Recommendation, ChannelStyle, ExampleLocation, TopLocation } from "./types";

namespace MapsUntold {

    interface Config {
        channel: string;
        apiKey: string;
        apiUrl?: string;
    }

    const Init = async (config: Config): Promise<Channel> => {
        const http = axios.create({
            baseURL: config.apiUrl || "https://api.mapsuntold.io/v2",
            withCredentials: true,
            headers: {
                "Authorization": `Token ${config.apiKey}`,
                "Content-Type": "application/json"
            }
        });

        const response = await http.get(`/channels/${config.channel}`);

        return new Channel(response.data, http);
    }

    class Channel implements RawChannel {
        public id: ID;
        public name: string;
        public slug: string;

        public style: ChannelStyle;

        public example_locations: ExampleLocation[];
        public top_locations: TopLocation[];
        public default_location: Location;

        public default_parent_category: ParentCategory;

        public included_cities: Array<ID>;

        public center: {
            latitude: number;
            longitude: number;
        };

        public custom_text: {
            personalize?: {
                intro?: {
                    title: string;
                    description: string;
                    action: string;
                }
            }
        }

        private _http: AxiosInstance;

        constructor(data: RawChannel, http: AxiosInstance) {
            this.id = data.id;
            this.name = data.name;
            this.slug = data.slug;
            this.style = data.style;

            this.example_locations = data.example_locations;
            this.top_locations = data.top_locations;
            this.default_location = data.default_location;
            this.default_parent_category = data.default_parent_category;

            this.included_cities = data.included_cities;

            this.center = data.center;
            this.custom_text = data.custom_text;

            this._http = http;
        }

        private async _get<T>(endpoint: string): Promise<T> {
            const response = await this._http.get(endpoint);
            return response.data;
        }

        public async getLocation(locationId: ID): Promise<Location> {
            return this._get(`/channels/${this.slug}/location/${locationId}/`);
        }

        public async getParentCategories(): Promise<Array<ParentCategory>> {
            return this._get(`/channels/${this.slug}/parent-categories/`);
        }

        public async getLocationAutocomplete(categoryId?: ID): Promise<Pagination<AutocompleteResult>> {
            return this._get(`/locations/autocomplete/${categoryId}/`);
        }

        public async getLocationByPlaceId(placeId: string): Promise<Location> {
            return this._get(`/locations/search-by-place-id/${placeId}/`);
        }

        public async getParentCategory(parentCategoryId: ID): Promise<ParentCategory> {
            return this._get(`/parent-categories/${parentCategoryId}/`);
        }

        public async getRecommendations(parentCategoryId: ID): Promise<Pagination<Recommendation>> {
            return this._get(`/channels/${this.slug}/recommendations/${parentCategoryId}`);
        }

        public async getRecommendation(parentCategoryId: ID, inputLocationId: ID, locationId: ID): Promise<Recommendation> {
            return this._get(`/channels/${this.slug}/recommendations/${parentCategoryId}/${inputLocationId}/${locationId}/`);
        }
    }
}

export { MapsUntold };