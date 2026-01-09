import type { UrlValidation } from '../../validations/urlValidation.js';
import UrlBusinessRules from '../rules/UrlBusinessRules.js';

class UrlService {

    static async getContent(url: UrlValidation){
        const videoId = UrlBusinessRules.getVideoId(url);
        return videoId;
    }

}

export default UrlService;