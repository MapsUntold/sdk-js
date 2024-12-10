# Maps Untold Javascript SDK (WIP)

## Installation
TODO

## Usage
```typescript
// Create config
const config = {
    apiKey: "<API_KEY>"
    style: {
        logo: "<URL>"
        colors: {
            primary: "<HEX>"
            secondary: "<HEX>"
            light: {
                text: "<HEX>"
                background: "<HEX>"
            },
            dark: {
                text: "<HEX>"
                background: "<HEX>"
            }
        }
    }
}

// Initialize the SDK
const mu = new MapsUntold(config)

// Retrieve a channel
const channel = await mu.getChannel("dille-kamille-eindhoven")

// Get generic results
const results1 = await channel.getRecommendations()

// Get personalized results
const results2 = await channel.getPersonalizedRecommendations()
```
