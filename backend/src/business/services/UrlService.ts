import Url from '../../models/Url.js';
import UrlBusinessRules from '../rules/UrlBusinessRules.js';

class UrlService {

    static async getContent(url: Url){
        const videoId = UrlBusinessRules.getVideoId(url);

    }

}