import React from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState(18);
  const [sexe, setSexe] = useState("Homme");

  const postData = async() => {
    const post = {
      method: "POST", // Get =>Apporte moi données // POST (incremente donées), PUT (MAJ), DELETE (Supprimer données)
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify({
        nom: name,
        prenom: prenom,
        sexe: sexe,
        age: age,
      }),

      credentials: "same-origin",
    };
    console.log(post.body);
    await axios
      .post("http://localhost:8000/back/api/create", post)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête POST : ", error.response.data);
      });
  };

  return (
    <div>
      <Navigation />

      <h1>Ajout Eleve</h1>

      <form action="" className="form-create">
        <label for="name">Nom </label>
        <input
          id="name"
          type="text"
          placeholder="Entrez votre nom"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label for="prenom">Prenom </label>
        <input
          id="prenom"
          type="text"
          placeholder="Entrez votre prenom"
          onChange={(e) => {
            setPrenom(e.target.value);
          }}
        ></input>
        <label for="age">Age</label>
        <input
          id="age"
          type="number"
          min="0"
          max="99"
          step="1"
          value={age}
          onChange={(e) => {
            setAge(parseInt(e.target.value));
            console.log(age);
          }}
        ></input>
        <label for="gender">Genre</label>
        <select
          id="gender"
          onChange={(e) => {
            setSexe(e.target.value);
          }}
        >
          <option value="homme">Homme</option>
          <option value="femme">Femme</option>
        </select>
      </form>
      <button className="Validation" onClick={postData}>
        Valider
      </button>
    </div>
  );
};

export default Home;
