from pydantic import BaseModel

class TranscriptModel(BaseModel):
    data: list[str]