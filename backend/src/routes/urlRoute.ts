import {Hono} from "hono";
import UrlController from "../controllers/UrlController.js";

const urlRoute = new Hono();
urlRoute.get("/getTranscription", UrlController.getTranscript);

export{urlRoute};