import yt_dlp
import os
import uuid

audio_folder = "../data/audio/"

def convert_url(youtube_url, output_folder=audio_folder):

    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    audio_name = uuid.uuid4()

    save_path = os.path.join(output_folder, f'{audio_name}.%(ext)s')


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
            ydl.download([youtube_url])
    except Exception as e:
        print(f"error: audio file can not download: {e}")

