from fastapi import FastAPI
from controller.TranscriptController import router 

app = FastAPI()

app.include_router(router, prefix="/api")

@app.get("/")
def home():
    return {"message": "server working"}