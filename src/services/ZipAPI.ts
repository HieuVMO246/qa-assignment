import request from 'supertest';
import { BaseAPI } from '../base/BaseAPI';
import PathAPI from '../config/PathAPI';

export default class ZipAPI extends BaseAPI {


    constructor() {
        super();
    }

    public async uploadAnZip(zipFile: string): Promise<request.Response> {
        return await this.postWithAttach(PathAPI.ZIP_PATH, zipFile);
    }

}