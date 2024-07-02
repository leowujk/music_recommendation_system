from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List

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

class Collection(BaseModel):
    name: str

collections: List[Collection] = []

@app.post("/api/createCollection")
async def create_collection(collection: Collection):
    for existing_collection in collections:
        if existing_collection.name == collection.name:
            raise HTTPException(status_code=400, detail="Collection already exists")
    collections.append(collection)
    return {"message": "Collection created", "name": collection.name}

@app.post("/api/deleteCollection")
async def delete_collection(collection: Collection):
    for existing_collection in collections:
        if existing_collection.name == collection.name:
            collections.remove(existing_collection)
            return {"message": "Collection deleted", "name": collection.name}
    raise HTTPException(status_code=404, detail="Collection not found")

class RenameRequest(BaseModel):
    oldName: str
    newName: str

@app.post("/api/renameCollection")
async def rename_collection(request: RenameRequest):
    for existing_collection in collections:
        if existing_collection.name == request.oldName:
            existing_collection.name = request.newName
            return {"message": "Collection renamed", "oldName": request.oldName, "newName": request.newName}
    raise HTTPException(status_code=404, detail="Collection not found")

@app.get("/api/collections")
async def get_collections():
    return collections
