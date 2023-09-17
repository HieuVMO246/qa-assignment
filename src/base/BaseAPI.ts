import request from 'supertest';

const defaultHeaders = {
  "Content-Type": "multipart/form-data"
};

export class BaseAPI {
  private baseUrl: string;

  constructor() {
    const baseUrl = process.env['BASE_URL'];
    expect(baseUrl).toBeDefined();
    this.baseUrl = baseUrl;
  }

  async postWithImage(endpoint: string, file: string): Promise<request.Response> {
    try {
      const response = await request(this.baseUrl)
        .post(endpoint)
        .set(defaultHeaders) // Set headers
        .attach('file', file); // Attach file
      return response;
    } catch (error) {
      throw error;
    }
  }

}
