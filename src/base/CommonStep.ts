import { Response } from 'supertest';

export default class CommonStep {


    public assertStatus(response: Response, expectedStatusCode: number) {
        expect(response.status).toBe(expectedStatusCode);
    }

    public assertHeaderExists(response: Response, headerName: string) {
        expect(response.headers).toHaveProperty(headerName);
    }

    public assertHeader(response: Response, headerName: string, expectedValue: string) {
        expect(response.headers[headerName]).toBe(expectedValue);
    }

    public assertResponseBodyHasProperty(response: Response, propertyName: string) {
        expect(response.body).toHaveProperty(propertyName);
    }

    public assertResponseBodyProperty(response: Response, propertyName: string, expectedValue: any) {
        expect(response.body[propertyName]).toEqual(expectedValue);
    }

    public assertResponseBodyPropertyToBeDefined(response: Response, propertyName: string) {
        expect(response.body[propertyName]).toBeDefined;
    }

    public getValueProperty(response: Response, propertyName: string): Promise<string> {
        return response.body[propertyName];
    }

    public static getPathDataFile(dataType:string, fileName:string):string{
        return `data\\${dataType}\\${fileName}`;
    }

}