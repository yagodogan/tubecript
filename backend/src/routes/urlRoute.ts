import {Hono} from "hono";
import UrlController from "../controllers/UrlController.js";

const urlRoute = new Hono();
urlRoute.get("/transcription", UrlController.getTranscript);

export{urlRoute};