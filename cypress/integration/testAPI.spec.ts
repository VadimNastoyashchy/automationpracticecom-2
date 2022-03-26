import {GeolocationAPI} from '../pom/GeolocationAPI';

const geolocationAPI = new GeolocationAPI();
const geolocationApiEndpoint = Cypress.env('geolocationApi');

describe('API test geolocation', () => {
    it('Smoke - User Ip geolocation service', () => {
        geolocationAPI
            .GET(geolocationApiEndpoint)
            .checkResponseStatusCode(200)
            .checkCountryCode()
            .checkCountryName();
    });
});