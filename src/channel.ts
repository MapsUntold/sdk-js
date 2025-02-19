import { ChannelStyle, ExampleLocation, ID, Location, Pagination, ParentCategory, RawChannel, Recommendation, TopLocation } from "./types";

class Channel {
    public id: ID
    public name: string
    public slug: string
    public style: ChannelStyle
    public location: Location
    public included_cities: Array<ID>

    constructor(data: RawChannel) {
        this.id = data.id
        this.name = data.name
        this.slug = data.slug
        this.style = data.style
        this.location = data.default_location
        this.included_cities = data.included_cities
    }

    public async getRecommendations(): Promise<Pagination<Recommendation>> {
        await new Promise(resolve => setTimeout(resolve, 500));

        //mock data
        const recommendations: Recommendation[] = [
            {
                distance: "3.5",
                score: 2,
                location: this.location ,
                id: 0,
                created_at: "",
                updated_at: ""
            },
            {
                distance: "5",
                score: 3,
                location: this.location,
                id: 0,
                created_at: "",
                updated_at: ""
            }
        ]

        return {
            count: recommendations.length,
            next: null,
            previous: null,
            results: recommendations
        };
    }
}

export {
    Channel
}

