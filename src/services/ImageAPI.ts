import { BaseAPI } from "src/base/BaseAPI";
import { PathAPI } from "src/config/PathAPI";
import request from 'supertest';

export default class ImageAPI extends BaseAPI {

    private constructor() {
        super();
    }

    public async uploadAnImage(file: string): Promise<request.Response> {
        return await this.postWithImage(PathAPI.IMAGE_PATH, file);
    }
}