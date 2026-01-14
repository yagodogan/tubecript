import type { UrlValidation } from '../../validations/urlValidation.js';
import UrlBusinessRules from '../rules/UrlBusinessRules.js';
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const TRANSCRIPTION_API = process.env.TRANSCRIPTION_API!;

class UrlService {

    static async getContent(url: UrlValidation){
        const videoId = UrlBusinessRules.getVideoId(url);
        try{
            const response = await axios.post(TRANSCRIPTION_API, {videoId: videoId})
            return response.data;
        }catch(error){
            return "An error occurred while sending a request to the Transcription API."
        }
    }
}

export default UrlService;