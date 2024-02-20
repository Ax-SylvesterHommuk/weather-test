import { createServer } from 'miragejs';
import searchResults from './search-results.json';

export default function createMockServer() {
    createServer({
        routes() {
            this.urlPrefix = 'http://api.openweathermap.org';
            this.get('/geo/1.0/direct', () => {
                return searchResults;
            });
        }
    });
}