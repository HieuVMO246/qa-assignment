import request from 'supertest';
import CommonStep from '../base/CommonStep';
import ImageAPI from '../services/ImageAPI';

export default class ImageStep extends CommonStep {
    imageAPI: ImageAPI;

    constructor() {
        super(),
            this.imageAPI = new ImageAPI();
    }

    public async uploadAnImage(file: string): Promise<request.Response> {
        return await this.imageAPI.postAnImage(file);
    }

    public async uploadMutipleImage(file1Path: string, file2Path: string): Promise<request.Response> {
        return await this.imageAPI.postMutipleImage(file1Path, file2Path);
    }

    public async getLinkImage(imageLink: string): Promise<request.Response> {
        return await this.imageAPI.getAnImage(imageLink);
    }

}