from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import shutil
import os

app = FastAPI()

class PageToDelete(BaseModel):
    pageName: str

@app.delete("/api/deletePage")
async def delete_page(page: PageToDelete):
    try:
        dir_path = f"./app/{page.pageName}"
        if os.path.exists(dir_path) and os.path.isdir(dir_path):
            shutil.rmtree(dir_path)
            return {"message": f"Deleted {page.pageName} directory and its contents successfully."}
        else:
            raise HTTPException(status_code=404, detail=f"File {page.pageName}/page.tsx not found.")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
