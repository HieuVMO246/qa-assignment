import request from 'supertest';
import PathAPI from '../config/PathAPI';
import * as fs from 'fs';


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
        .timeout(10000);
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

}


