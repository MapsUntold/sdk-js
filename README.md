# Maps Untold Javascript SDK

## How to use
```typescript
import Mapsuntold, MapsUntoldConfig from '@mapsuntold/sdk';

// Create config
const config : MapsUntoldConfig = {
    // Used to authenticate with the Maps Untold API
    apiKey: "<API_KEY>"
};

// Initialize the SDK
const mu = new MapsUntold(config);

// Retrieve a channel
const channel = await mu.getChannel("maps-untold");

// Get results
const results = await channel.getRecommendations(/* PARAMS */);
```
