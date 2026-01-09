import ValueError from "../../exeption/BusinessExeption.js";
import type { UrlValidation } from "../../validations/urlValidation.js";

class UrlBusinessRules{

    static getVideoId(url: UrlValidation): string {
        
        const videoId = new URL(url.url).searchParams.get("v");

        if (!videoId){
            throw new ValueError("Video id can not found.");
        }
            
        return videoId;
    }
}

export default UrlBusinessRules;