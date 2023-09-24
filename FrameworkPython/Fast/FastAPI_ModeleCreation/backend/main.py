from fastapi import FastAPI
from typing import List
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from noms import prenoms

app = FastAPI()

origins = ["http://localhost:3000"]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],

)

app.include_router(prenoms.router, prefix="", tags=["prenom"])
# Liste de prénoms (c'est ici que vous pouvez ajouter vos prénoms)
prenom_list = ["Alice", "Bob", "Charlie", "David", "Eve"]


class AjouterNomRequest(BaseModel):
    nom: str


@app.post("/api/ajouter_nom/")
async def ajouter_nom(request: AjouterNomRequest):
    prenom_list.append(request.nom)
    return {"message": f"Nom '{request.nom}' ajouté avec succès."}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="localhost", port=8000)
