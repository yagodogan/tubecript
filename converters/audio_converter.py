import os
from groq import Groq

client = Groq(api_key=os.getenv("GROQ_API_KEY")) 

filename = "../data/audio/"

def transcribe_audio(filename):

    try:
        audio_name = os.listdir(filename)[0]
    except FileNotFoundError as e:
        print(f"error: audio file can not found: {e}")
        return

    with open(filename, "rb") as file:
        transcription = client.audio.transcriptions.create(
        file=(audio_name, file.read()),
        model=os.getenv("WHISPER_MODEL"), 
        response_format="json",
        language="tr"
        )
    return transcription


