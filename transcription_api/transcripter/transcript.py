from youtube_transcript_api import YouTubeTranscriptApi
from response.GenericResponse import GenericResponse

class Transcript:

    def getTranscript(videoId):
        try:
            ytApi = YouTubeTranscriptApi()
            fetchedTranscript = ytApi.fetch(videoId, languages=["tr", "en"])
            return fetchedTranscript
        except Exception:
            return GenericResponse(
                success= False,
                message= "check the video id"
            )
        
    def fullText(videoId):
        full_text= []
        try:
            fetchedTranscript = Transcript.getTranscript(videoId).to_raw_data()
            for data in fetchedTranscript:
                full_text.append(data["text"])
            return full_text
        except Exception:
            return GenericResponse(
                success= False,
                message= "transcription can not fetch"
            )
