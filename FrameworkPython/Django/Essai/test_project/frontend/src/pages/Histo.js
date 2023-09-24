import React from "react";
import { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import axios from "axios";
import Student from "../components/Student";

const Histo = () => {
  const [dataStudent, setDataStudent] = useState([]);

  const getData = () => {
    const init = {
      method: "GET", // Get =>Apporte moi données // POST (incremente donées), PUT (MAJ), DELETE (Supprimer données)
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      cache: "default",
    };
    axios.get("http://localhost:8000/back/api", init).then((response) => {
      setDataStudent(response.data);
      console.log(response.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="eleves-container">
        {dataStudent.map((student, index) => (
          <Student key={index} stu={student} />
        ))}
      </div>
    </div>
  );
};

export default Histo;
