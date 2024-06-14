from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/api/python")
async def hello_world():
    return {"message": "hello world"}

class User(BaseModel):
    username: str
    password: str

@app.post("/api/login")
async def login(user: User):
    print(user.username)
    return {"username": user.username}

class Register(BaseModel):
    username: str
    password: str
    confirmPassword: str
    age: str
    gender: str
    city: str

@app.post("/api/register")
async def register(user: Register):
    print(user.username)
    return {"username": user.username}

class AccountChange(BaseModel):
    username: str
    password: str
    newPassword: str
    confirmNewPassword: str
    age: str
    gender: str
    city: str

@app.post("/api/account_change")
async def account_change(user: AccountChange):
    print(user.username)
    return {"username": user.username}
