type ID = number;

interface Model {
    id: ID
}

interface Location extends Model {
    id: number;
    title: string;
    description: string;
    phone: string;
    website: string;
    open_now: boolean;
    open_today: boolean;
    place_id: string;
    reviews_stars: number;
    reviews_count: number;

    promo: {
        title: string;
        icon: string;
    } | null;

    category: {
        id: number;
        name: string;
    };

    parent_category: {
        id: number;
        name: string;
    };

    address: {
        country: string;
        city: string;
        postal_code: string;
        neighborhood: string;
        street: string;
        plus_code: string;
        latitude: number;
        longitude: number;
    };

    media: {
        thumbnail_url: string;
        media_url: string;
        type: "image";
    }[];

    actions: {
        text: string;
        url: string;
        icon: string;
    }[];
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
    top_locations: Array<TopLocation>
    example_locations: Array<ExampleLocation>
    default_location: Location
    included_cities: Array<ID>
    default_parent_category: ParentCategory
    style: {
        id: number;
        logo: string;
        colors: {
            primary: string;
            secondary: string;
        };
    };
    center: {
        latitude: number;
        longitude: number;
    }
    custom_text: Partial<{
        personalize: Partial<{
            intro: {
                title: string;
                description: string;
                action: string;
            }
        }>
    }>
}

interface Recommendation extends Model {
    match: number;
    distance: string;
    topics: {
        id: string;
        title: string;
        match: number;
    }[];
    location: Location;
}

interface ParentCategory extends Model {
    id: number;
    name: string;
    name_singular: string;
    name_plural: string;
    search_text: string;
    icon: string;
    created_at: string;
    updated_at: string;
}

interface LocationAutocomplete {
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
    Recommendation,
    ParentCategory,
    LocationAutocomplete,
    Pagination
};