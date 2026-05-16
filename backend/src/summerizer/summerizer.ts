import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.GEMINI_API_KEY;
const modelName = process.env.GEMINI_MODEL;

const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null;
const model = (genAI && modelName) ? genAI.getGenerativeModel({ model: modelName }) : null;

export const getSummerizedTranscript = async (text: string) => {
    if (!apiKey || !modelName || !model) {
        return 'summary process unsuccess. Missing API key or Model name.';
    }

    try {
        const prompt = `Aşağıdaki metnin ana fikrini kaybetmeden, net ve anlaşılır bir şekilde Türkçe özetini çıkar:\n\n${text}`;
        const result = await model.generateContent(prompt);
        const summary = result.response.text();
        return summary;
    } catch (error) {
        return 'summary process unsuccess.';
    }
}