from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/api/python")
async def hello_world():
    return {"message":"hello world"}

class User(BaseModel):
    username: str
    password: str
    
@app.post("/api/login")
async def hello_world(user: User):
    print(user.username)
    return user.username