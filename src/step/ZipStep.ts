import request from 'supertest';
import CommonStep from '../base/CommonStep';
import ZipAPI from '../services/ZipAPI';

export default class ZipStep extends CommonStep{
    
    zipAPI:ZipAPI;

    constructor(){
        super(),
        this.zipAPI = new ZipAPI();
    }

    public async uploadAnZip(file:string):Promise<request.Response> {
        return await this.zipAPI.uploadAnZip(file);
    }
    public async getLinkInZip(imageLink: string): Promise<request.Response>{
        return await this.zipAPI.getAnImage(imageLink);
    }
        
}