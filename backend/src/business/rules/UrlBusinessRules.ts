import ValueError from "../../exeption/BusinessExeption.js";
import Url from "../../models/Url.js";

class UrlBusinessRules{

    static getVideoId(url:Url): string {
        
        const videoId = new URL(url.url).searchParams.get("v");

        if (!videoId){
            throw new ValueError("Video id can not found.");
        }
            
        return videoId;
    }
}

export default UrlBusinessRules;