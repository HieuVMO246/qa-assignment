
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
    
    public async postMutipleImage(file1Path: string, file2Path:string): Promise<request.Response> {
        return await this.postWithMultipleAttach(PathAPI.IMAGE_PATH, file1Path, file2Path);
    }
    
    public async getAnImage(urlImage: string): Promise<request.Response> {
        return await request(urlImage).get("");
    }

}