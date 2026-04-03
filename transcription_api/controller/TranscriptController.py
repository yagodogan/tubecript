from services.TranscriptService import TranscriptService as service
from models.TranscriptModel import TranscriptModel 
from models.UrlModel import UrlModel
from fastapi import APIRouter

from response.GenericResponse import GenericResponse

router = APIRouter()

class TranscriptController:

    @router.post("/get", response_model=GenericResponse[TranscriptModel]) 
    async def get_transcript(videoId: UrlModel):
        return service.baseTranscript(videoId)

    @router.post("/getTitle")
    async def get_title(videoId: UrlModel):
        return service.getTitle(videoId)