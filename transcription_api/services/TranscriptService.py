from transcripter.transcript import Transcript

from models.UrlModel import UrlModel
from models.TranscriptModel import TranscriptModel
from response.GenericResponse import GenericResponse


class TranscriptService:

    @staticmethod
    def baseTranscript(videoId: UrlModel) -> GenericResponse[TranscriptModel]:
        fetchedTranscript = Transcript.fullText(videoId.videoId)
        return GenericResponse[TranscriptModel](
            success=True,
            message="transcript got successfully",
            data = TranscriptModel(data=fetchedTranscript)
        )
