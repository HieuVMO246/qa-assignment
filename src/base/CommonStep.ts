import { Response } from 'supertest';

export default class CommonStep {

    // Verify that the response status code matches the expected value
    public assertStatus(response: Response, expectedStatusCode: number) {
        expect(response.status).toBe(expectedStatusCode);
    }

    // Verify that the response contains a certain header
    public assertHeaderExists(response: Response, headerName: string) {
        expect(response.headers).toHaveProperty(headerName);
    }

    // Verify that the response header has a specific value
    public assertHeader(response: Response, headerName: string, expectedValue: string) {
        expect(response.headers[headerName]).toBe(expectedValue);
    }

    // Verify that the response body contains a specific property
    public assertResponseBodyHasProperty(response: Response, propertyName: string) {
        expect(response.body).toHaveProperty(propertyName);
    }

    // Verify that the response body property has a specific value
    public assertResponseBodyProperty(response: Response, propertyName: string, expectedValue: any) {
        expect(response.body[propertyName]).toEqual(expectedValue);
    }


}