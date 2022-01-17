import { GeolocationAPI } from "../pom/GeolocationAPI";

const geolocationAPI = new GeolocationAPI();

describe('API test geolocation', () => {
    it('Smoke - User Ip geolocation service', () => {
        geolocationAPI
            .GET()
            .checkResponseStatusCode(200)
            .checkCountryCode()
            .checkCountryName();
    });
});