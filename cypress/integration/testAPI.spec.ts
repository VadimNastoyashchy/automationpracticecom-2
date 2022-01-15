import { GeolocationAPI } from "../pom/GeolocationAPI";


const testAPI = new GeolocationAPI();


describe('API test geolocation', () => {
    it('Smoke - User Ip geolocation service', () => {
        testAPI
            .getResponse()
            .checkResponseStatusIs200()
            .checkCountryCode()
            .checkCountryName();

    })
})

    // ----not POM version
    //         cy.request('https://freegeoip.app/json/').then((response) => {
    //             expect(response.status).to.eq(200);
    //             expect(response.body).to.have.property('country_code').eq('UA');
    //             expect(response.body).to.have.property('country_name').eq('Ukraine');
    //         }
    //         )

    //     })
//})