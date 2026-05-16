import {api} from '../axios';

class TranscriptionService{

    static async getTranscription(url: string): Promise<string[]>{
        const response = await api.get("/transcription",{
            params:{
                url: url
            }
        })
        return response.data.data.data
    }

    static async getTitle(url: string): Promise<string>{
        const response = await api.get("/title", {
            params: {
                url: url
            }
        })
        return response.data.data
    }

    static async getSummerize(text: string): Promise<string>{
        const response = await api.post('/summerize', {
            text: text 
});
        return response.data;
    }

}

export default TranscriptionService;