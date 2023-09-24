from fastapi import APIRouter

router = APIRouter()

# Liste de prénoms (c'est ici que vous pouvez ajouter vos prénoms)
prenom_list = ["Alice", "Bob", "Charlie", "David", "Eve"]


@router.get("/api/prenoms/{nombre:int}/{lettre:str}")
async def get_prenoms(nombre: int, lettre: str):
    """Methode renvoyant liste de noms

    Args:
        nombre (int): nombre de noms 
        lettre (str): lettre a chercher
    Returns:
        list: liste des noms filtree
    """
    number = len(prenom_list) if nombre == 0 else nombre
    lst = prenom_list[0:number]
    if lettre != "w":
        resulat = [element for element in lst if lettre in element.lower()]
    else:
        resulat = lst
    return resulat
