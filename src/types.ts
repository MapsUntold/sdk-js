type ID = number;

interface Model {
    id: ID
    created_at: string
    updated_at: string
}

interface Image extends Model {
    image_url: string
}

interface Location extends Model {
    address: string
    category_name: string
    city: string
    country_code: string
    description: string | null
    extra_text: string | null
    header_text: string | null
    highlight_text: string | null
    image_url: string
    images: Array<Image>
    lat: number
    lon: number
    menu_link: string | null
    neighborhood: string
    number_of_reviews: number
    open_now: boolean
    open_today: boolean
    parent_category: ID
    parent_category_name: string
    phone: string
    place_id: string
    plus_code: string
    postal_code: string
    price: string
    reservation_link_mu: string | null
    review_stars: number
    street: string
    tags: Array<string>
    title: string
    website: string
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
    tags: Array<string>
    recommendation: Location
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