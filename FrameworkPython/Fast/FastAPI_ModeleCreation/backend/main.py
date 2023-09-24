from fastapi import FastAPI
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = ["http://localhost:3000"]

# Liste de prénoms (c'est ici que vous pouvez ajouter vos prénoms)
prenom_list = ["Alice", "Bob", "Charlie", "David", "Eve"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)


class AjouterNomRequest(BaseModel):
    nom: str


@app.get("/api/prenoms/")
async def get_prenoms():
    return prenom_list


@app.post("/api/ajouter_nom/")
async def ajouter_nom(request: AjouterNomRequest):
    prenom_list.append(request.nom)
    return {"message": f"Nom '{request.nom}' ajouté avec succès."}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
