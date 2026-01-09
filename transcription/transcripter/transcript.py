from youtube_transcript_api import YouTubeTranscriptApi

class Transcript:

    def getTranscript(videoId):
        try:
            ytApi = YouTubeTranscriptApi()
            fetchedTranscript = ytApi.fetch(videoId, languages=["tr"])
            #print(fetchedTranscript)
            return fetchedTranscript

        except Exception as e:
            print(e)
            return f"Unexpected Error: {e}"
        
    def fullText(videoId):
        fetchedTranscript = Transcript.getTranscript(videoId).to_raw_data()
        try:
            for data in fetchedTranscript:
                full_text = "".join(data["text"])
            return full_text
        except Exception as e:
            return f"Unexpected Error: {e}"
