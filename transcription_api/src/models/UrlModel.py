from pydantic import BaseModel

class UrlModel(BaseModel):
    videoId: str