import axios, { AxiosInstance } from "axios";
import { LocationAutocomplete, Location, ID, Pagination, RawChannel, ParentCategory, Recommendation, ExampleLocation, TopLocation } from "./types";
import "./iframe";

interface MapsUntoldConfig {
    channelSlug: string;
    apiKey: string;
    apiUrl?: string;
}

interface IframeConfig {
    channelSlug: string;
}

const MapsUntold = async (config: MapsUntoldConfig): Promise<Channel> => {
    const http = axios.create({
        baseURL: config.apiUrl || "https://api.mapsuntold.io/v2",
        withCredentials: true,
        headers: {
            "Authorization": `Token ${config.apiKey}`,
            "Content-Type": "application/json"
        }
    });

    const response = await http.get(`/channels/${config.channelSlug}`);

    return new Channel(response.data, http);
};

class Channel implements RawChannel {
    public id;
    public name;
    public slug;
    public style;

    public example_locations;
    public top_locations;
    public default_location;
    public default_parent_category;
    public included_cities;
    public center;
    public custom_text;

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
        try {
            return (await this._http.get(endpoint)).data;
        } catch (e) {
            if (axios.isAxiosError(e)) {
                throw new Error(`MapsUntold error ${e.code}: ${e.message}`);
            }
            throw new Error(`MapsUntold error: ${e}`);
        }
    }

    public async getLocation(locationId: ID): Promise<Location> {
        return this._get(`/channels/${this.slug}/locations/${locationId}/`);
    }

    public async getParentCategories(): Promise<Array<ParentCategory>> {
        return this._get(`/channels/${this.slug}/parent-categories/`);
    }

    public async getLocationAutocomplete(query: string): Promise<Pagination<LocationAutocomplete>> {
        return this._get(`/locations/autocomplete/?search=${query}`);
    }

    public async getLocationAutocompleteByCategory(query: string, categoryId: ID): Promise<Pagination<LocationAutocomplete>> {
        return this._get(`/locations/autocomplete/${categoryId}/?search=${query}`);
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

    public async getRecommendationsByLocation(parentCategoryId: ID, inputLocationId: ID): Promise<Pagination<Recommendation>> {
        return this._get(`/channels/${this.slug}/recommendations/${parentCategoryId}/${inputLocationId}/`);
    }

    public async getRecommendation(parentCategoryId: ID, inputLocationId: ID, locationId: ID): Promise<Recommendation> {
        return this._get(`/channels/${this.slug}/recommendations/${parentCategoryId}/${inputLocationId}/${locationId}/`);
    }
}

export {
    MapsUntoldConfig,
    MapsUntold,
    Channel,
    Location,
    LocationAutocomplete,
    Recommendation,
    Pagination,
    ParentCategory,
    TopLocation,
    ExampleLocation,
};