import React from 'react';
import Header from './Header';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RemplirAvis = () => {

  const back = useHistory();
  const goToStart = () => {
    back.push("/");
  }
  const goToList = () => {
    back.push("/liste");
  }

  const [avi, setAvi] = useState({
    name: "",
    date: "",
    observation: ""
  });

  const handleChange = (key, value) => {
    setAvi({
      ...avi,
      [key]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:1337/api/avis", {
      method: "POST",
      body: JSON.stringify({ data: avi }),
      headers: {
        "Content-Type": "application/json"
      }
    });
    setAvi({
      name: "",
      date: "",
      observation: ""
    })
  };

  return (
    <div className='App'>
      <Header />
      <div className="containerForm">
        <h1 className='titleFill'>Avis de passage :</h1>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="containerName">
            <label htmlFor="inputName">Nom du client/ de l'entreprise :</label>
            <input id="inputName" type="text" value={avi.name} onChange={(e) => handleChange("name", e.target.value)} />
          </div>

          <div className="containerDate">
            <label htmlFor="inputDate">Date de l'intervention :</label>
            <input id='inputDate' type="date" value={avi.date} onChange={(e) => handleChange("date", e.target.value)} />
          </div>

          <div className="containerObservation">
            <label htmlFor="inputObservation">Observations :</label>
            <textarea className='inputObservation' id='inputObservation' type="text" value={avi.observation} onChange={(e) => handleChange("observation", e.target.value)} />
          </div>

          <input className='btn' type="submit" value="Ajouter l'avis" />
        </form>
      </div>

      <div className="move">
        <span className="backHome" onClick={() => goToStart()}>
          🏠 Retour à l'accueil
        </span>
        <span className="goList" onClick={() => goToList()}>
          📒 Voir la liste des avis de passage
        </span>
      </div>


    </div>
  )
}

export default RemplirAvis