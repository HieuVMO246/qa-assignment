
import request from 'supertest';
import { BaseAPI } from '../base/BaseAPI';
import PathAPI from '../config/PathAPI';


export default class ImageAPI extends BaseAPI {

    constructor() {
        super();
    }

    public async postAnImage(file: string): Promise<request.Response> {
        return await this.postWithAttach(PathAPI.IMAGE_PATH, file);
    }
}