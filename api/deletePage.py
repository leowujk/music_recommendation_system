from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os

app = FastAPI()

class PageToDelete(BaseModel):
    pageName: str

@app.delete("/api/deletePage")
async def delete_page(page: PageToDelete):
    try:
        file_path = f"./app/{page.pageName}/page.tsx"
        if os.path.exists(file_path):
            os.remove(file_path)
            return {"message": f"Deleted {page.pageName}'s page.tsx successfully."}
        else:
            raise HTTPException(status_code=404, detail=f"File {page.pageName}/page.tsx not found.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
