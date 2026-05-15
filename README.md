# Tubecript 

![Logo](frontend/src/assets/logo.svg) 

Tubecript is a practical and fast tool that allows users to obtain a video transcript in seconds simply by entering a YouTube video link. By eliminating the time lost during manual transcription, it converts video content into a readable, searchable, and analyzable text format. Additionally, you can easily export the converted text into a PDF file.

## Features 
* **Instant Transcription:** Get full YouTube transcripts in seconds using just the video URL.
* **PDF Export:** Seamlessly convert and download your transcripts as PDF documents.
* **Searchable Content:** Turn video audio into analyzable and searchable text data.
* **Dockerized Environment:** Easy, consistent, and isolated deployment using Docker Compose.

## Prerequisites 
Before you begin, ensure you have the following installed on your machine:
* [Git](https://git-scm.com/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)

## Deployment 

Follow these steps to get the project up and running locally:

**1. Clone the repository**
```bash
git clone git@github.com:yagodogan/tubecript.git
cd tubecript
```

2. Set up environment variables
You need to create .env files for the backend, frontend, and transcription API by copying the provided example files. You can do this quickly by running the following commands from the root tubecript directory:

```bash
cp backend/src/.env.example backend/src/.env
cp frontend/.env.example frontend/.env
cp transcription_api/.env.example transcription_api/.env
```

3. Build and run the application
Start the services using Docker Compose:
```bash
docker compose up --build
```

4. Access the App
Once the containers are up and running, open your web browser and navigate to:
 http://localhost:5173/

### Developer Note: In the future, there are plans to add AI-powered summarization to take this project even further.



## License

[MIT](https://choosealicense.com/licenses/mit/)

