import ValueError from "../../exception/BusinessExeption.js";
import type { UrlValidation } from "../../validations/urlValidation.js";

class UrlBusinessRules {

    static getVideoId(url: UrlValidation): string {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
        
        const match = url.url.match(regex);
        const videoId = (match && match[1]) ? match[1] : null;

        if (!videoId) {
            throw new ValueError("Video ID could not be found in the provided URL.");
        }
            
        return videoId;
    }
}

export default UrlBusinessRules;