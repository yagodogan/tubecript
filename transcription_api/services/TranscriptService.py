from transcripter.transcript import Transcript

from models.UrlModel import UrlModel
from models.TranscriptModel import TranscriptModel
from response.GenericResponse import GenericResponse
import yt_dlp


class TranscriptService:

    @staticmethod
    def baseTranscript(videoId: UrlModel) -> GenericResponse[TranscriptModel]:
        fetchedTranscript = Transcript.fullText(videoId.videoId)
        return GenericResponse[TranscriptModel](
            success=True,
            message="transcript got successfully",
            data = TranscriptModel(data=fetchedTranscript)
        )
    
    @staticmethod
    def getTitle(videoId: UrlModel) -> GenericResponse[str]:
        try:
            id = videoId.videoId
            url = f"https://www.youtube.com/watch?v={id}"
            with yt_dlp.YoutubeDL() as ydl:
                info = ydl.extract_info(url, download=False)
                title = info.get('title')
            return GenericResponse(
                success = True,
                message = "title got successfully.",
                data = title
            )
        except Exception:
            return GenericResponse(
                succes = False,
                message = "error occurs when try get yt title."
            )