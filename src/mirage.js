import { createServer } from 'miragejs';

export default function setupMirageServer() {
    createServer({
        routes() {
            this.namespace = 'api';

            this.get('/weather', (schema, request) => {
                const { lat, lon } = request.queryParams;

                return {
                    coord: {
                        lon: parseFloat(lon),
                        lat: parseFloat(lat),
                    },
                    weather: [
                        {
                            id: 804,
                            main: "Clouds",
                            description: "overcast clouds",
                            icon: "04d",
                        },
                    ],
                    base: "stations",
                    main: {
                        temp: 220.15,
                        feels_like: 276.15,
                        temp_min: 274.56,
                        temp_max: 278.32,
                        pressure: 1025,
                        humidity: 80,
                        sea_level: 1025,
                        grnd_level: 936,
                    },
                    visibility: 10000,
                    wind: {
                        speed: 1.12,
                        deg: 341,
                        gust: 1.16,
                    },
                    clouds: {
                        all: 96,
                    },
                    dt: 1708413575,
                    sys: {
                        type: 1,
                        id: 6812,
                        country: "IT",
                        sunrise: 1708409372,
                        sunset: 1708447829,
                    },
                    timezone: 3600,
                    id: 3163858,
                    name: "Zocca",
                    cod: 200,
                };
            });
        }
    });
}