import React from 'react';
import Header from './Header';
import { useState } from 'react';

const RemplirAvis = () => {

  const [avi, setAvi] = useState({
    name: "",
    date:"",
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
    fetch ("http://localhost:1337/api/avis", {
      method: "POST",
      body: JSON.stringify({data:avi}),
      headers: {
        "Content-Type":"application/json"
      }
    });
    setAvi({
      name:"",
      date:"",
      observation:""
    })
  };

  return (
    <div className='App'>
      <Header />
      <p>Avis de passage : </p>

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
          <input id='inputObservation' type="text" value={avi.observation} onChange={(e) => handleChange("observation", e.target.value)} />
        </div>

        <input type="submit" value="Ajouter l'avis" />

      </form>
    </div>
  )
}

export default RemplirAvis