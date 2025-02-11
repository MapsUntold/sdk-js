type ID = number;

interface Model {
    id: ID
    created_at: string
    updated_at: string
}

interface Location extends Model {
    title: string
    description: string
    // extra_text: string

    phone: string
    website: string

    open_now: boolean
    open_today: boolean

    place_id: string
    reviews_stars: number
    reviews_count: number

    topics: string[]

    category: {
        id: number
        title: string
    }

    parent_category: {
        id: number
        title: string
    }

    media: {
        thumbnail_url: string
        media_url: string
        type: "photo" | "video"
    }[]

    actions: {
        text: string
        url: string
        icon: string
    }[]

    address: {
        country: string
        city: string
        postal_code: string
        neighborhood: string
        street: string
        plus_code: string
        latitude: number
        longitude: number
    }
}

interface ChannelStyle extends Model {
    logo: string
    primary_color: string
    secondary_color: string
    light_text_color: string
    font: string | null
    enable_animation: boolean
}

interface TopLocation extends Model {
    location: Location
    custom_text: string
}

interface ExampleLocation extends Model {
    location: Location
}

interface RawChannel extends Model {
    name: string
    slug: string
    style: ChannelStyle
    top_locations: Array<TopLocation>
    example_locations: Array<ExampleLocation>
    default_location: Location
    included_cities: Array<ID>
    default_parent_category: ParentCategory
}

interface Recommendation extends Model {
    distance: string
    score: number
    location: Location
}

interface ParentCategory extends Model {
    name: string
    search_text: string
}

interface AutocompleteResult {
    id: ID
    title: string
    address: string
    city: string
    category: ID
    category_name: string
    parent_category: ID
    parent_category_name: string
}

interface Pagination<T> {
    count: number
    next: string | null
    previous: string | null
    results: Array<T>
}

export {
    ID,
    TopLocation,
    ExampleLocation,
    Location,
    RawChannel,
    ChannelStyle,
    Recommendation,
    ParentCategory,
    AutocompleteResult,
    Pagination
};