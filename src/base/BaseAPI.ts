import request from 'supertest';
import PathAPI from '../config/PathAPI';
import GlobalVariable from '../config/GlobalVariable';


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
        .attach('file', file)
        .timeout(GlobalVariable.API_TIMEOUT);
      console.log('Response:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async postWithMultipleAttach(endpoint: string, file1Path: string, file2Path: string): Promise<request.Response> {
    try {
      const response = await request(this.baseUrl)
        .post(endpoint)
        .set(defaultHeaders)
        .attach('file', file1Path)
        .attach('file', file2Path)
        .timeout(10000);
      console.log('Response:', response);
      return response;
    } catch (error) {
      throw error;
    }
  }

  public async getAnImage(urlImage: string): Promise<request.Response> {
    return await request(urlImage).get("");
}

}


