# Maps Untold Javascript SDK

## Important
The SDK is out-of-date. The new questions API and relevant changes/fixes have not been implemented in the SDK, but directly into the frontend.

## How to use
```typescript
import MapsUntoldChannel, MapsUntoldConfig from '@mapsuntold/sdk';

// Create config
const config : MapsUntoldConfig = {
    // Used to authenticate with the Maps Untold API
    apiKey: "<API_KEY>"
};

// Initialize the SDK
const mu = new MapsUntoldChannel(config);

// Retrieve a channel
const channel = await mu.getChannel("maps-untold");

// Get results
const results = await channel.getRecommendations(/* PARAMS */);
```

## Bespreken
- [x] channel als root
- [x] iframe dingetje
- [x] jsfiddle
- [/] documentatie
- [x] geen personalized recommendations (wachten op UI component) 
