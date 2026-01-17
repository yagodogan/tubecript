import yt_dlp
import os
import uuid

DATA_DIR = "./transcription/premium/pro_transcription/data"
YOUTUBE = "https://www.youtube.com/watch?v="

def convert_url(videoId, output_folder=DATA_DIR):

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    yt_link = YOUTUBE + videoId
    audioId = uuid.uuid4()

    save_path = os.path.join(output_folder, f'{audioId}.%(ext)s')


    ydl_opts = {
        'format': 'bestaudio/best', 
        'postprocessors': [{
            'key': 'FFmpegExtractAudio',
            'preferredcodec': 'mp3',
            'preferredquality': '192', 
        }],
        'outtmpl': save_path, 
        'quiet': False, 
    }

    try:
        with yt_dlp.YoutubeDL(ydl_opts) as ydl:
            ydl.download([yt_link])
            return audioId
    except Exception as e:
        return f"error: audio file can not download: {e}"
    
