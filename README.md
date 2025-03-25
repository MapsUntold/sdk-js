# Maps Untold Javascript SDK

## How to use
```typescript
import { MapsUntold } from '@mapsuntold/sdk';

// Initialize the SDK
const channel = await MapsUntold({
    apiKey: "<API_KEY>",
    channelSlug: "<CHANNEL_SLUG>"
});

// Get categories
const categories = await channel.getParentCategories();

// Select a category
const category = categories.results[0];

// Get channel recommendations
const recommendations = await channel.getRecommendations(category.id);
``