import React from 'react';
import Header from './Header';
import { useState } from 'react';

const RemplirAvis = () => {

  const [avis, setAvis] = useState([{
    id: 0,
    name: "",
    date: 0,
    observation: ""
  }]);

  const handleChange = (key, value) => {
    setAvis({
      ...avis,
      [key]: value
    })
  };

  const handleSubmit = () => {
    const newAvis = {id: Date.now(), name:"", date:0, observation:""};
    const copyAvis= [...avis];
    copyAvis.push(newAvis);
    setAvis(copyAvis)
  };

  return (
    <div className='App'>
      <Header />
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="containerName">
          <label htmlFor="inputName">Nom :</label>
          <input id="inputName" type="text" value={avis.name} onChange={(e) => handleChange("name", e.target.value)} />
        </div>

        <div className="containerDate">
          <label htmlFor="inputDate">Prix :</label>
          <input id='inputDate' type="text" value={avis.date} onChange={(e) => handleChange("date", e.target.value)} />
        </div>

        <div className="containerObservation">
          <label htmlFor="inputImage">Url de l'image :</label>
          <input id='inputImage' type="text" value={avis.observation} onChange={(e) => handleChange("observation", e.target.value)} />
        </div>

        <input type="submit" value="Ajouter le légume" />

      </form>
    </div>
  )
}

export default RemplirAvis