import type { UrlValidation } from '../../validations/urlValidation.js';
import UrlBusinessRules from '../rules/UrlBusinessRules.js';
import axios from "axios";
import dotenv from "dotenv";
import { getSummerizedTranscript } from '../../summerizer/summerizer.js';

dotenv.config();
const TRANSCRIPTION_API = process.env.TRANSCRIPTION_API!;
const TITLE_API = process.env.TITLE_API!;

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

    static async getTitle(url: UrlValidation){
        const videoId = UrlBusinessRules.getVideoId(url);
        try{
            const response = await axios.post(TITLE_API, {videoId: videoId})
            return response.data;
        }catch{
            return "An error occurred while sending a request to the title API."
        }
    }

    static async getSummerize(text: string){
        try{
            return getSummerizedTranscript(text);
        }catch(error){
            return error
        }
    }
}

export default UrlService;
