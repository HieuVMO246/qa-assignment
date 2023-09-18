import request from 'supertest';
import PathAPI from '../config/PathAPI';


const defaultHeaders = {
  "Content-Type": "multipart/form-data"
};

export class BaseAPI {
  private baseUrl: any;

  constructor() {
     this.baseUrl = PathAPI.BASE_URL;
    expect(this.baseUrl).toBeDefined();
  }

  async postWithAttach(endpoint: string, file: string): Promise<request.Response> {
    try {
      const response = await request(this.baseUrl)
        .post(endpoint)
        .set(defaultHeaders)
        .attach('file', file); 
      return response;
    } catch (error) {
      throw error;
    }
  }

}
