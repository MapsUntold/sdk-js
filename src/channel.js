"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
class Channel {
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.slug = data.slug;
        this.style = data.style;
        this.location = data.default_location;
        this.included_cities = data.included_cities;
    }
    async getRecommendations() {
        // TODO
    }
}
exports.Channel = Channel;
