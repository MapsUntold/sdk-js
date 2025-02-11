# Maps Untold Javascript SDK (WIP)

## Towards version 1
The goal is to provide a simple typescript library that integration partners can use to query the MapsUntold API. The library will implement 4 methods:
- Get a channel -> `mu.getChannel()`
- Get channel recommendations -> `channel.getRecommendations(category)`
- Get parent categories -> `mu.getParentCategories()`
- Get autocomplete results -> `mu.getLocationAutocomplete(query)`

A github action should be included that builds the library into a package.

## Concept: How to use
```typescript
import Mapsuntold, MapsUntoldConfig from '@mapsuntold/sdk'

// Create config
const config : MapsUntoldConfig = {
    // Used to authenticate with the Maps Untold API
    apiKey: "<API_KEY>"
}

// Initialize the SDK
const mu = new MapsUntold(config)

// Retrieve a channel
const channel = await mu.getChannel("dille-kamille-eindhoven")

// Get results
const results = await channel.getRecommendations(/* PARAMS */)
```
