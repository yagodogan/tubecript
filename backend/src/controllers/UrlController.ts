import type {Context} from 'hono';
import UrlService from '../business/services/UrlService.js';
import { UrlValidation } from '../validations/urlValidation.js';
import { ZodError } from 'zod';

class UrlController {
    static async getTranscript(c: Context){
        try{
            const queryParams = c.req.query();
            const validatedData = UrlValidation.parse(queryParams);
            const result = await UrlService.getContent(validatedData);
            return c.json(result);
        }catch(error){
            if (error instanceof ZodError) {
                return c.json({message: "Validation failed", errors: error.name})
            }
            return c.json({message: "Failed get transcription."})
        }
    }
}

export default UrlController;