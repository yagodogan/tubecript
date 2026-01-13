import os
from groq import Groq

client = Groq(api_key=os.getenv("GROQ_API_KEY")) 

DATA_DIR = "./transcription/premium/pro_transcription/data"

def transcribe_audio(DATA_DIR):
    
    os.makedirs(DATA_DIR, exist_ok=True)

    try:
        audio_name = os.listdir(DATA_DIR)[0]
    except FileNotFoundError as e:
        print(f"error: audio file can not found: {e}")
        return
    
    audio_path = os.path.join(DATA_DIR, audio_name)

    with open(audio_path, "rb") as file:
        transcription = client.audio.transcriptions.create(
            file=(audio_name, file.read()),
            model=os.getenv("WHISPER_MODEL"), 
            response_format="json",
            language="tr"
        )
    return transcription